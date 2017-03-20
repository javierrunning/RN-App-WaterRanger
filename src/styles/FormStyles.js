import EStyleSheet from 'react-native-extended-stylesheet';
import './GlobalStyles.js';
import { Platform } from 'react-native';

var LABEL_COLOR = '#000000';
var INPUT_COLOR = '#000000';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#c3c3a9';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 16;
var FONT_WEIGHT = '500';

var stylesheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {
      borderColor: BORDER_COLOR,
      borderStyle: 'dashed',
      borderWidth: 1,
      marginBottom: 5
    },
    error: {
      borderColor: ERROR_COLOR,
      borderStyle: 'dashed',
      borderWidth: 1,
      marginBottom: 5
    },
    notEditable: {
      borderColor: BORDER_COLOR,
      borderStyle: 'dashed',
      borderWidth: 1,
      marginBottom: 5
    }
  },
  textbox: {
    normal: {
      backgroundColor: '#fff',
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 42,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7,
      borderWidth: 0
    },
    // the style applied when a validation error occours
    error: {
      backgroundColor: '#fff',
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 42,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 42,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerContainer: {
    normal: {
      backgroundColor: '#fff',
      marginBottom: 4,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1
    },
    error: {
      borderColor: ERROR_COLOR
    },
    open: {
      backgroundColor: '#fff',
      // Alter styles when select container is open
    }
  },
  select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: INPUT_COLOR
      },
      ios: {
        backgroundColor: '#fff'
      }
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: ERROR_COLOR
      },
      ios: {

      }
    })
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      backgroundColor: '#fff',
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {}
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Oswald Regular',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = stylesheet;