# nanashouseapp

## Security maintenance (2026-10-23)

Both pages use jQuery 3.7.1 slim and Bootstrap 4.6.2 with SHA-384 integrity checks.
Bootstrap's bundle supplies compatible Popper code. The duplicate Bootstrap 3 stylesheet is removed.
The [jQuery 3.5 upgrade guide](https://jquery.com/upgrade-guide/3.5/) describes the DOM XSS fix.
The [Bootstrap 4.6.2 release](https://blog.getbootstrap.com/2022/07/19/bootstrap-4-6-2/) describes the compatible release.

Local browser checks loaded both CDN libraries with SRI enabled.
The expense action opened the modal and calculated the five amounts. The categories page showed nine buttons.
`node --check things-add.js` passed. There is no package manifest, lint command, or test command.

TODO before reuse: migrate Bootstrap 4 to a supported major and check all layout and modal behavior.
An advisory version match does not prove a live exploit. No deployment occurred.
