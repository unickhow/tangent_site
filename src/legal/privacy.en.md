---
updated: 2026-11-19
---

This Privacy Policy explains what information Nicraft (“we”, “us”) handles when you use the Tangent app for macOS (“Tangent” or “the app”), visit this website (tangent.nicraft.co), download Tangent, or update it. Tangent is still growing, so this policy is written to cover the whole product, not only today’s features. When a new feature changes what we handle, we update this policy before that feature ships.

## The short version

- Your projects, conversations, models and settings stay on your Mac. We never receive them.
- Tangent doesn’t include an AI model. You choose a model source, and when you ask the Agent, your request goes from your Mac to that source, never through us.
- Tangent doesn’t store API keys or sign-ins. A model source you bring in keeps its own.
- Tangent has no Nicraft account and no cloud sync, and it contains no advertising or tracking code.
- Tangent’s own servers only deliver the website, the installer and update files. They never receive your projects.

## 1. Information that stays on your Mac

Tangent works locally. The following is stored on your Mac and is not sent to us:

- **Projects.** Each project’s conversation, model code, versions, meshes and STEP files, annotations, colors and materials, and its card thumbnail are saved in Tangent’s folder in your Library. They aren’t additionally encrypted by Tangent.
- **Attachments.** Images, PDFs and text files you attach are held in memory while Tangent is open. They aren’t saved with the project: after you reopen Tangent, earlier messages keep the file’s name but not the file.
- **Preferences.** Settings such as language, model source and its options, and the app icon are stored on your Mac.
- **Exports.** Files you export are saved where you choose. Open in Bambu Studio writes a 3MF file to Tangent’s cache on your Mac and opens it in Bambu Studio.

Tangent is not a backup service. Export or back up anything important.

## 2. Model sources and the Agent

Tangent’s Agent is powered by a model source you choose and set up: a command-line tool on your Mac (such as Claude Code or Codex) or a local model server (such as Ollama or LM Studio). Tangent has no models of its own and doesn’t hold any keys: the tool keeps its own sign-in.

**What is sent.** Each time you send a message, Tangent sends the chosen source what the Agent needs for that turn:

- your message, and the attachments it can read (images, PDFs, text files and SVG source);
- the earlier messages in the project’s conversation;
- the current model’s code;
- the parts you selected on the model, with their names, positions, directions and sizes;
- your annotations, with their notes and positions;
- Tangent’s instructions and bundled CAD modeling knowledge.

If the code fails to build, the error goes back to the same source so it can fix it. For attachments it can’t read, such as links, videos and CAD files, the Agent only receives the name. Tangent doesn’t download the pages behind links you attach.

**Where it goes.** The request goes directly from your Mac to the source you chose. A command-line tool sends it to its own service under the account you signed in with. A local model server keeps it on your Mac or on the computer you point Tangent to.

**Who handles it.** We don’t receive, store or see any of this. The source you chose processes it under its own terms and privacy policy, including whether it keeps your requests or uses them to train models. Check that provider’s settings and policies before sending anything confidential. If you don’t want your designs to leave your Mac, use a local model server.

## 3. macOS permissions

Tangent currently doesn’t ask for special macOS permissions such as Accessibility, screen recording, camera or microphone. It reads files only when you attach them, and writes files where you choose when you export. If a future feature needs a permission, the app explains why when it asks.

## 4. When Tangent connects to the internet

- **Model sources.** As described in section 2.
- **Geometry engine setup.** Tangent’s geometry engine isn’t part of the installer. The first time Tangent starts, and after an update that changes the engine, it builds the engine on your Mac with uv. If your Mac has no suitable uv, Tangent first downloads its own pinned release from GitHub and only uses it if it matches a checksum built into the app. uv then downloads the engine’s pinned open-source components (such as build123d) from the Python Package Index and, if your Mac has no suitable Python, a Python runtime from GitHub. Those services receive the ordinary information any download involves, such as your IP address. Nothing from your projects is sent.
- **Links.** Links in the Agent’s replies open in your web browser, only when you click them.
- **Updates.** A few seconds after it starts, and then once a day, Tangent asks tangent.nicraft.co for a small file that names the newest version. The request carries nothing about you or your Mac: no identifier, no version and nothing from your projects. If you turn automatic checks off in Settings, it stops. When a newer version exists, Tangent downloads it from download.nicraft.co in the background, checks its signature against a key built into the app, and only then replaces itself. These servers receive the ordinary information any request involves, such as your IP address.
- **Crash reports and analytics.** Tangent currently doesn’t send crash reports or usage analytics. If we add them, we’ll describe them here first. They will never include your conversations, attachments or models.

The model code the Agent writes is run in a sandbox on your Mac without network access.

## 5. The website and downloads

- **Website.** We use Microsoft Clarity to understand how visitors use this site. Clarity sets cookies and records how you interact with pages, such as clicks, scrolling and mouse movement, along with your device and browser type and approximate location; text you type into forms is masked. Microsoft processes this data under its own privacy statement. If you pick a theme, your browser remembers it in its own storage; it isn’t sent to us. Our hosting provider processes the technical data needed to deliver pages and keep the site secure, such as your IP address, browser type and the pages requested.
- **Downloads.** The installer and update files are served from download.nicraft.co. Our storage provider processes the technical data needed to deliver them and keep the service secure, such as your IP address and the file requested. We don’t ask for your email address or an account to download Tangent.

## 6. Service providers

We share information only with providers that help us run Tangent, and only what each one needs. Currently they are:

- **Vercel:** website hosting, including the file that announces new versions.
- **Cloudflare:** storage and delivery of the installer and update files.
- **Microsoft Clarity:** website analytics.

When we add a provider, we’ll add it to this list. We don’t sell your personal information, and we don’t share it for advertising.

The model source you choose (section 2) and the download sources for the geometry engine (section 4) are not our providers: your Mac connects to them directly, and we don’t share information with them.

We may also disclose information when required by law, or when necessary to protect the rights, safety or security of our users, ourselves or others.

## 7. Legal bases

Where the law requires a legal basis, such as the EU and UK GDPR, we rely on the following:

- **Performing our contract with you:** providing the app.
- **Our legitimate interests:** keeping Tangent secure and working, and understanding what to build.
- **Your consent:** any optional feature that asks for it.
- **Legal obligations:** for example, tax and accounting records.

Where Taiwan’s Personal Data Protection Act applies, we collect and use personal data only within the purposes described in this policy.

## 8. International transfers

Our providers may process information in countries other than yours, including the United States. Where the law requires it, we rely on appropriate safeguards for these transfers, such as standard contractual clauses.

## 9. How long we keep information

- **Information on your Mac:** you control it. It stays until you delete the project or remove the app’s data.
- **Information sent to your model source:** kept for as long as that provider’s policy and your settings with it allow. We don’t hold a copy.
- **Technical logs at our providers:** kept for the limited periods those providers set.

## 10. Your rights

Depending on where you live, you may have the right to:

- access a copy of your information;
- correct or complete it;
- delete it;
- object to or restrict how we use it;
- receive it in a portable format;
- withdraw consent at any time.

To make a request, email contact@nicraft.co. We may need to confirm that the request is yours. We respond within the time the applicable law requires. Some information may have to be kept by law. We can’t access or delete what you sent to your model source; ask that provider directly. You can also complain to your local data protection authority.

## 11. Security

We use reasonable technical and organizational measures to protect information. In the app, updates are verified against a key built into the app, the geometry engine only accepts requests from Tangent itself, and model code runs in a sandbox. For the information we hold, we use encrypted connections and limit who can access it. No method of transmission or storage is completely secure. If a data incident affects you, we will notify you as the law requires.

## 12. Children

Tangent is not directed at children under 13, or under the minimum age set by the law where you live. We don’t knowingly collect their personal information. Model sources set their own minimum ages. If you believe a child has given us information, contact us and we’ll delete it.

## 13. Changes to this policy

We’ll update this policy as Tangent and the law change. The date at the top shows the latest version. When a change is significant, for example a new kind of information or a new use for it, we’ll announce it on this website or in the app before it takes effect. Where the law requires your consent, we’ll ask for it.

## 14. Contact

Nicraft · contact@nicraft.co
