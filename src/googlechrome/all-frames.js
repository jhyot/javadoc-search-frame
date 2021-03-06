/**
 * The MIT License
 *
 * Copyright (c) 2009 Steven G. Brown
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


// The top-level page hides the package frame before it appears.

var framesets = document.getElementsByTagName('frameset');
if (framesets) {
  for (var i = 0; i < framesets.length; i++) {
    var frameset = framesets[i];
    var framesetChildren = frameset.children;
    if (framesetChildren &&
        framesetChildren.length === 2 &&
        framesetChildren[0].name === 'packageListFrame' &&
        framesetChildren[1].name === 'packageFrame') {
      var message = {operation: 'get', key: 'hide_package_frame'};
      Storage.get(Option.HIDE_PACKAGE_FRAME, function(hidePackageFrame) {
        if (hidePackageFrame) {
          frameset.setAttribute('rows', '0,*');
          frameset.setAttribute('border', 0);
          frameset.setAttribute('frameborder', 0);
          frameset.setAttribute('framespacing', 0);
        }
      });
    }
  }
}

