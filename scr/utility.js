"use strict";

const darkSchemeDetection = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Registers a listener function that triggers when the colour scheme changes.
 *
 * @param {Function} listener The function to be called when a scheme change event occurs.
 */
export function onSchemeChanged(listener) {
	darkSchemeDetection?.addEventListener("change", listener);
}

/**
 * Detects the current system colour scheme.
 *
 * @returns {"dark" | "light"} The current system colour scheme, either "dark" or "light".
 */
export function getSystemScheme() {
	return darkSchemeDetection?.matches ? "dark" : "light";
}

/**
 * Retrieves the preferred colour scheme.
 *
 * Retrieves the user's "web appearance" browser settings. If the setting is explicitly `light` or `dark`, returns it. Otherwise, falls back to the operating system's current colour scheme based on media query detection.
 *
 * This function should be called in background script to return the correct result.
 *
 * @returns {Promise<"light" | "dark">} The current colour scheme, either `light` or `dark`.
 */
export async function getCurrentScheme() {
	const webAppearanceSetting = await browser.browserSettings.overrideContentColorScheme.get({});
	const webAppearance = webAppearanceSetting.value;
	return webAppearance === "light" || webAppearance === "dark" ? webAppearance : getSystemScheme();
}

/**
 * Updates the text content and title of elements based on localisation data attributes.
 *
 * Finds elements with `data-text`, `data-title`, or `data-placeholder` attributes, retrieves the localised text using the `msg` function, and assigns it to the element's `textContent`, `title`, or `placeholder`.
 *
 * @param {Document} webDocument The document to localise.
 */
export function localise(webDocument) {
	webDocument.querySelectorAll("[data-text]").forEach((element) => {
		element.textContent = msg(element.dataset.text);
	});
	webDocument.querySelectorAll("[data-title]").forEach((element) => {
		element.title = msg(element.dataset.title);
	});
	webDocument.querySelectorAll("[data-placeholder]").forEach((element) => {
		element.placeholder = msg(element.dataset.placeholder);
	});
}

/**
 * Inquires localised messages.
 *
 * @param {string} handle A handle in _locales.
 * If the handle is not found, returns `i18n <${handle}>`.
 * If the localisation value is `__EMPTY__`, returns an empty string.
 */
export function msg(handle) {
	const localisedMessage = browser.i18n.getMessage(handle);
	if (!localisedMessage) {
		return `i18n <${handle}>`;
	} else if (localisedMessage === "__EMPTY__") {
		return "";
	} else {
		return localisedMessage;
	}
}
