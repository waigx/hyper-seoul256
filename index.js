'use strict'

const foregroundColor = '#d0d0d0'
const backgroundColor = '#3a3a3a'
const black = '#4e4e4e'
const red = '#d68787'
const yellow = '#d8af5f'
const green = '#5f865f'
const blue = '#85add4'
const magenta = '#d7afaf'
const cyan = '#87afaf'
const white = '#d0d0d0'

const lightBlack = '#626262'
const lightRed = '#d75f87'
const lightYellow = '#ffd787'
const lightGreen = '#87af87'
const lightBlue = '#add4fb'
const lightMagenta = '#ffafaf'
const lightCyan = '#87d7d7'
const lightWhite = '#e4e4e4'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: foregroundColor,
    selectionColor: cyan + "4d",
    colors: {
      black,
      red,
      yellow,
      green,
      blue,
      magenta,
      cyan,
      white,

      // bright
      lightBlack,
      lightRed,
      lightYellow,
      lightGreen,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    css: `
        ${config.css || ''}
        .tabs_list .tab_tab.tab_active .tab_text  {
            background: ${backgroundColor};
        }
    `
  })
}
