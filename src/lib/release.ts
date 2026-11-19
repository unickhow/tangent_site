// The release the site offers, read at build time from the update manifest the app itself checks
// (public/updates/v0/latest.json), so publishing a release also moves the download button.
// The app repo's convention (tangent/docs/RELEASING.md, scripts/publish_update.py): files are named
// Tangent_X.Y.Z_<arch>.app.tar.gz (the update archive, the only address the manifest records) and
// Tangent_X.Y.Z_<arch>.dmg (the installer, uploaded with --dmg) in the same download folder, and a
// published name is never replaced. The folder (`download_base`) is the publisher's setting, so the
// installer's address is derived from the archive's, not written here.
import latest from '../../public/updates/v0/latest.json';

const ARCHIVE = /^(https:\/\/[^\s?#]+\/)(Tangent_(\d+\.\d+\.\d+)_aarch64)\.app\.tar\.gz$/;

const archive: string = latest.platforms?.['darwin-aarch64']?.url ?? '';
const match = ARCHIVE.exec(archive);
// A manifest that doesn't match fails the build rather than shipping a dead or wrong download
if (!match || match[3] !== latest.version) {
  throw new Error(`latest.json: darwin-aarch64 url (${archive}) must be <download_base>/Tangent_${latest.version}_aarch64.app.tar.gz`);
}
const macos = /^\d+(\.\d+)*$/.test(latest.minimum_system_version) ? latest.minimum_system_version.replace(/(\.0)+$/, '') : '';
if (!macos) throw new Error('latest.json: minimum_system_version is missing');

export const release = {
  version: latest.version,
  dmgUrl: `${match[1]}${match[2]}.dmg`,
  macos,
};
