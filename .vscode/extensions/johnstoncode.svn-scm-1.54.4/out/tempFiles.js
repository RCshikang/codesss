"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const vscode_1 = require("vscode");
const fs_1 = require("./fs");
exports.tempdir = path.join(os.tmpdir(), "vscode-svn");
function dumpSvnFile(snvUri, revision, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield fs_1.exists(exports.tempdir))) {
            yield fs_1.mkdir(exports.tempdir);
        }
        const fname = `r${revision}_${path.basename(snvUri.fsPath)}`;
        const fpath = path.join(exports.tempdir, fname);
        yield fs_1.writeFile(fpath, payload);
        return vscode_1.Uri.file(fpath);
    });
}
exports.dumpSvnFile = dumpSvnFile;
//# sourceMappingURL=tempFiles.js.map