/*
 * SPDX-FileCopyrightText: 2020 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

// const clipboardy = require('clipboardy');
module.exports = ( on ) => {
  on('task', {
    getClipboard () {
      // return clipboardy.readSync();
    }
  });
};
