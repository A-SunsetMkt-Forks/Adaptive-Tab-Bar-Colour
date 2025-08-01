![Icon](src/images/ATBC_128.png)  
![Mozilla Add-on Users](https://img.shields.io/amo/users/adaptive-tab-bar-colour)
![Mozilla Add-on Rating](https://img.shields.io/amo/stars/adaptive-tab-bar-colour)
![Mozilla Add-on](https://img.shields.io/amo/v/adaptive-tab-bar-colour?color=blue&label=version)
![Sponsors](https://img.shields.io/badge/sponsors-21-green)

# Adaptive Tab Bar Colour

Changes the colour of Firefox theme to match the website’s appearance.

<a href="https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour/" target="_blank">
	<img src="assets/get-addon-badge-firefox.png" width="178" height="48">
</a>

<br>

## What Does the Add-on Do?

While you browse the web, this add-on changes the theme of Firefox to match the appearance of the website you are viewing — just like how macOS Safari tints its tab bar.

<img src="https://addons.mozilla.org/user-media/previews/full/272/272045.png" width="45%"> <img src="https://addons.mozilla.org/user-media/previews/full/272/272046.png" width="45%"> <img src="https://addons.mozilla.org/user-media/previews/full/272/272047.png" width="45%"> <img src="https://addons.mozilla.org/user-media/previews/full/272/272048.png" width="45%">

<br>

## Works Well With:

<ol>
	<li><a href="https://addons.mozilla.org/firefox/addon/darkreader/">Dark Reader</a></li>
	<li><a href="https://addons.mozilla.org/firefox/addon/stylish/">Stylish</a></li>
	<li><a href="https://addons.mozilla.org/firefox/addon/dark-mode-website-switcher/">Dark Mode Website Switcher</a></li>
</ol>

<br>

## Incompatible With:

<ol>
	<li>Firefox versions older than <a href="https://www.mozilla.org/firefox/112.0/releasenotes/">112.0</a> (released in April 2023)</li>
	<li><a href="https://addons.mozilla.org/firefox/addon/adaptive-theme-creator/">Adaptive Theme Creator</a></li>
	<li><a href="https://addons.mozilla.org/firefox/addon/chameleon-dynamic-theme-fixed/">Chameleon Dynamic Theme</a></li>
	<li><a href="https://addons.mozilla.org/firefox/addon/vivaldifox/">VivaldiFox</a></li>
	<li><a href="https://addons.mozilla.org/firefox/addon/envify/">Envify</a></li>
	<li>and any other add-on that changes the Firefox theme</li>
</ol>

<br>

## If You’re Using a CSS Theme:

A CSS theme can work with ATBC (Adaptive Tab Bar Colour) when system colour variables are used (e.g. `--lwt-accent-color` for tab bar colour). [This](https://github.com/easonwong-de/Firefox-Adaptive-Sur-Theme) is an example of an ATBC-compatible CSS theme.

<img src="https://github.com/easonwong-de/Firefox-Adaptive-Sur-Theme/raw/main/assets/adaptive-sur-1.png" width="45%"> <img src="https://github.com/easonwong-de/Firefox-Adaptive-Sur-Theme/raw/main/assets/adaptive-sur-2.png" width="45%">

<br>

## If You’re Using Linux with a GTK Theme:

Firefox’s titlebar buttons may revert to the Windows style. To prevent this, open Advanced Preferences (`about:config`) and set `widget.gtk.non-native-titlebar-buttons.enabled` to `false`. (Thanks to [@anselstetter](https://github.com/anselstetter/))

<br>

## Safety Reminder:

Beware of malicious web UIs: Please distinguish between the browser’s UI and the web UI, see <a href="https://textslashplain.com/2017/01/14/the-line-of-death/">The Line of Death</a>. (Thanks to <a href="https://www.reddit.com/user/KazaHesto/">u/KazaHesto</a>)
