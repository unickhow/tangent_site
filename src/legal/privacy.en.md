---
updated: 2026-10-28
---

This Privacy Policy explains what information Nicraft (“we”, “us”) handles when you use the Tangent app for macOS (“Tangent” or “the app”), visit this website (tangent.nicraft.co), join the waitlist, or buy, activate or update a Tangent license. Tangent is still growing, so this policy is written to cover the whole product, not only today’s features. When a new feature changes what we handle, we update this policy before that feature ships.

## The short version

- Your projects, conversations, models and settings stay on your Mac. We never receive them.
- Tangent doesn’t include an AI model. You choose a model source, and when you ask the Agent, your request goes from your Mac to that source, never through us.
- Your API keys are kept in the macOS Keychain and are only sent to the service they belong to.
- Tangent has no Nicraft account and no cloud sync, and it contains no advertising or tracking code.
- The waitlist only needs your email address.
- If you buy a license, your payment is handled by our payment provider. We never see your card details.

## 1. Information that stays on your Mac

Tangent works locally. The following is stored on your Mac and is not sent to us:

- **Projects.** Each project’s conversation, model code, versions, meshes and STEP files, annotations, colors and materials, and its card thumbnail are saved in Tangent’s folder in your Library. They aren’t additionally encrypted by Tangent.
- **Attachments.** Images, PDFs and text files you attach are held in memory while Tangent is open. They aren’t saved with the project: after you reopen Tangent, earlier messages keep the file’s name but not the file.
- **API keys.** Keys you enter for cloud model sources are stored in the macOS Keychain. They are never written to project files or logs, and never sent to us.
- **Preferences.** Settings such as language, model source and its options, and the app icon are stored on your Mac.
- **Exports.** Files you export are saved where you choose. Open in Bambu Studio writes a 3MF file to Tangent’s cache on your Mac and opens it in Bambu Studio.
- **License state.** Once licenses are available, your license and activation status will be stored on your Mac, so licensed features keep working offline.

Tangent is not a backup service. Export or back up anything important.

## 2. Model sources and the Agent

Tangent’s Agent is powered by a model source you choose and set up: a command-line tool on your Mac (such as Claude Code or Codex), a local model server (such as Ollama or LM Studio), or a cloud service (such as OpenAI, Anthropic, Gemini, OpenRouter or another OpenAI-compatible service).

**What is sent.** Each time you send a message, Tangent sends the chosen source what the Agent needs for that turn:

- your message, and the attachments it can read (images, PDFs, text files and SVG source);
- the earlier messages in the project’s conversation;
- the current model’s code;
- the parts you selected on the model, with their names, positions, directions and sizes;
- your annotations, with their notes and positions;
- Tangent’s instructions and bundled CAD modeling knowledge.

If the code fails to build, the error goes back to the same source so it can fix it. For attachments it can’t read, such as links, videos and CAD files, the Agent only receives the name. Tangent doesn’t download the pages behind links you attach.

**Where it goes.** The request goes directly from your Mac to the source you chose. A command-line tool sends it to its own service under the account you signed in with. A local model server keeps it on your Mac or on the computer you point Tangent to. A cloud service receives it with your API key.

**Who handles it.** We don’t receive, store or see any of this. The source you chose processes it under its own terms and privacy policy, including whether it keeps your requests or uses them to train models. Check that provider’s settings and policies before sending anything confidential. If you don’t want your designs to leave your Mac, use a local model server.

## 3. macOS permissions

Tangent currently doesn’t ask for special macOS permissions such as Accessibility, screen recording, camera or microphone. It uses the macOS Keychain to store your API keys. It reads files only when you attach them, and writes files where you choose when you export. If a future feature needs a permission, the app explains why when it asks.

## 4. When Tangent connects to the internet

- **Model sources.** As described in section 2.
- **Geometry engine setup.** Tangent’s geometry engine runs on your Mac with uv, which you install. The first time Tangent starts, and after an update that changes the engine, uv downloads the engine’s pinned open-source components (such as build123d) from the Python Package Index and, if your Mac has no suitable Python, a Python runtime from GitHub. Those services receive the ordinary information any download involves, such as your IP address. Nothing from your projects is sent.
- **Links.** Links in the Agent’s replies open in your web browser, only when you click them.
- **Licenses and updates.** When Tangent offers purchases, license activation and update checks, the app will send only what those tasks need. That includes your license key and activation status, a random identifier for this installation, and the app and macOS versions. It will not include a hardware serial number or anything from your projects. This section will list these exchanges in detail before they ship.
- **Crash reports and analytics.** Tangent currently doesn’t send crash reports or usage analytics. If we add them, we’ll describe them here first. They will never include your conversations, attachments, models or API keys.

The model code the Agent writes is run in a sandbox on your Mac without network access.

## 5. The website and the waitlist

- **Website.** This site is static and doesn’t set cookies or run analytics. If you pick a theme, your browser remembers it in its own storage; it isn’t sent to us. Our hosting provider processes the technical data needed to deliver pages and keep the site secure, such as your IP address, browser type and the pages requested.
- **Waitlist.** The waitlist form is provided by Tally. It asks for your email address; any other question on the form is optional. It also records the language of the page you joined from. Tally’s script loads only when you open the form. We use this information to send you Tangent updates and launch news, and to decide what to build next. You can unsubscribe at any time with the link in any email, or by writing to us.

## 6. Purchases and licenses

Purchases are processed by a third-party payment provider, which may act as the reseller (“merchant of record”) for the sale. The provider is named at checkout. It collects your payment details and processes them under its own privacy policy, and we never receive your full card number. From the provider, we receive what we need to deliver and support your license. That means your name and email address, your country, the order details and any refund status. We use them to issue your license, send license emails, help you recover a lost license, handle refunds and keep the records the law requires.

## 7. Service providers

We share information only with providers that help us run Tangent, and only what each one needs. Currently they are:

- **Vercel:** website hosting.
- **Tally:** the waitlist form.

As purchases, license delivery, email and updates go live, we’ll add the providers involved to this list. They may include a payment provider, a cloud service for licensing, and an email delivery service. We don’t sell your personal information, and we don’t share it for advertising.

The model source you choose (section 2) and the download sources for the geometry engine (section 4) are not our providers: your Mac connects to them directly, and we don’t share information with them.

We may also disclose information when required by law, or when necessary to protect the rights, safety or security of our users, ourselves or others.

## 8. Legal bases

Where the law requires a legal basis, such as the EU and UK GDPR, we rely on the following:

- **Performing our contract with you:** providing the app and your license.
- **Our legitimate interests:** keeping Tangent secure and working, and understanding what to build.
- **Your consent:** the waitlist and any optional features that ask for it.
- **Legal obligations:** for example, tax and accounting records.

Where Taiwan’s Personal Data Protection Act applies, we collect and use personal data only within the purposes described in this policy.

## 9. International transfers

Our providers may process information in countries other than yours, including the United States. Where the law requires it, we rely on appropriate safeguards for these transfers, such as standard contractual clauses.

## 10. How long we keep information

- **Information on your Mac:** you control it. It stays until you delete the project or remove the app’s data.
- **Information sent to your model source:** kept for as long as that provider’s policy and your settings with it allow. We don’t hold a copy.
- **Waitlist data:** kept until you unsubscribe or ask us to delete it, or until we no longer need it for the waitlist.
- **Purchase and license records:** kept for as long as your license is active, and afterwards for as long as tax, accounting or other laws require.
- **Technical logs at our providers:** kept for the limited periods those providers set.

## 11. Your rights

Depending on where you live, you may have the right to:

- access a copy of your information;
- correct or complete it;
- delete it;
- object to or restrict how we use it;
- receive it in a portable format;
- withdraw consent at any time.

To make a request, email contact@nicraft.co. We may need to confirm that the request is yours. We respond within the time the applicable law requires. Some information, such as purchase records, may have to be kept by law. We can’t access or delete what you sent to your model source; ask that provider directly. You can also complain to your local data protection authority.

## 12. Security

We use reasonable technical and organizational measures to protect information. In the app, API keys stay in the Keychain, the geometry engine only accepts requests from Tangent itself, and model code runs in a sandbox. For the information we hold, we use encrypted connections and limit access to purchase and license records. No method of transmission or storage is completely secure. If a data incident affects you, we will notify you as the law requires.

## 13. Children

Tangent is not directed at children under 13, or under the minimum age set by the law where you live. We don’t knowingly collect their personal information. Model sources set their own minimum ages. If you believe a child has given us information, contact us and we’ll delete it.

## 14. Changes to this policy

We’ll update this policy as Tangent and the law change. The date at the top shows the latest version. When a change is significant, for example a new kind of information or a new use for it, we’ll announce it on this website or in the app before it takes effect. Where the law requires your consent, we’ll ask for it.

## 15. Contact

Nicraft · contact@nicraft.co
