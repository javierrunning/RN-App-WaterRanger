import EStyleSheet from 'react-native-extended-stylesheet';
import '../GlobalStyles';

export const styles = EStyleSheet.create({
  waitingContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formWrapper: {
    backgroundColor: '$colorBeige'
  },
  formFieldset: {
    borderBottomColor: '$borderColor',
    borderBottomWidth: 1,
    padding: 20
  },
  formImageUpload: {
    padding: 20
  },
  formSubmit: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },
  addSceneContainer: {
    backgroundColor: '$colorBeige',
    flex: 1,
    justifyContent: 'center',
  },
  addScrollContainer: {
    backgroundColor: '$colorBeige',
    flex: 1
  },
  addSceneTabBarContainer: {
    backgroundColor: '$colorBeige',
    borderColor: '$lineColor',
    borderBottomWidth: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  addSceneTabBarButton: {
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    paddingTop: 3,
    paddingBottom: 5,
    '@media android': {
      borderRadius: 0,
    }
  },
  addSceneTabBarButtonLeft: {
    borderColor: '$colorGreen'
  },
  addSceneTabBarButtonLeftActive: {
    backgroundColor: '$colorGreen'
  },
  addSceneTabBarButtonRight: {
    borderColor: '$colorRed'
  },
  addSceneTabBarButtonRightActive: {
    backgroundColor: '$colorRed',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  addSceneTabBarTextLeft: {
    color: '$colorGreen',
    fontFamily: '$globalFontHeader',
    textAlign: 'center'
  },
  addSceneTabBarTextRight: {
    color: '$colorRed',
    fontFamily: '$globalFontHeader',
    textAlign: 'center'
  },
  addSceneTabBarTextActive: {
    color: '$colorWhite'
  },
  refreshContainer: {
    backgroundColor: '$colorBeige',
    borderBottomColor: '$lineColor',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  addSceneLatLngContainer: {
    backgroundColor: '$colorBeige',
    borderBottomColor: '$lineColor',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addSceneLatLngBlock: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  addSceneLatLngRefreshBlock: {
    flex: 0
  },
  addSceneLatLngTitle: {
    color: '$colorDarkBeige',
    fontFamily: '$globalFontHeader',
    fontSize: 16,
    marginRight: 5
  },
  addSceneLatLngValue: {
    color: '$colorBlack'
  },
  addSceneSmallTitle: {
    color: '$colorDarkBeige',
    fontSize: 12
  },
  // Offline page
  offlineFormsHeader: {
    marginBottom: 0,
    padding: 10
  },
  offlineFormsContainer: {
    borderTopColor: '$lineColor',
    borderTopWidth: 1,
    flex: 1
  },
  offlineFormsListView: {
    flex: 1,
    padding: 20
  },
  offlineFormsFooter: {
    borderTopColor: '$lineColor',
    borderTopWidth: 1,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  offlineListRowContainer: {
    backgroundColor: '$colorWhite',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    '@media android': {
      borderColor: '$lineColor',
      borderWidth: 1,
    },
  },
  offlineListTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  offlineListDate: {
    color: '$colorDarkBeige',
    fontSize: 12
  },
  offlineFormsMessage: {
    lineHeight: 20,
    padding: 20
  },
  listSeparator: {
    backgroundColor: '$lineColor',
    height: 1
  },
  groupSelectContainer: {
    borderBottomColor: '$lineColor',
    borderBottomWidth: 1
  },
  groupItem: {
    fontSize: 15,
    marginLeft: 0,
    fontFamily: '$globalFont',
    marginBottom: 5
  },
  // Observation data layout
  headingLabel: {
    fontFamily: '$globalFont',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left'
  },
  observationDataContainer: {
    flex: 1,
    paddingBottom: 10
  },
  observationDataCol: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    width: '100%'
  },
  observationDataCheckbox: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  invasiveSpeciesCol: {
    alignItems: 'flex-start',
    backgroundColor: '#dbdbca',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    overflow: 'hidden',
    '@media android': {
      borderRadius: 0,
    },
  },
  singleDataCol: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  // Collapsible sections
  formCollapsibleWrapper: {
    borderBottomColor: '$borderColor',
    borderBottomWidth: 1
  },
  // formCollapsibleContainer: {
  //   paddingTop: 20
  // },
  formCollapsibleButton: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  formCollapsibleButtonIcon: {
    fontSize: 24,
    marginRight: 5,
  },
  formCollapsibleButtonText: {
    fontFamily: '$globalFontHeader',
    fontSize: 24,
    lineHeight: 28,
    '@media android': {
      lineHeight: 22,
    },
  },
  // Invasive Species
  invasiveSpeciesImages: {
    borderRadius: 5,
    marginBottom: 10
  },
  // Water Tests
  waterTestsRow: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  // Image upload
  formImageUploadContainer: {
    alignItems: 'flex-start',
    borderBottomColor: '$borderColor',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  formImageUploadBlock: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  formImageUploadPlaceHolder: {
    backgroundColor: '$colorLightGrey',
    borderRadius: 10,
    '@media android': {
      borderRadius: 0,
    }
  },
  formImageUploadRemove: {
    backgroundColor: '$colorRed',
    bottom: 5,
    borderRadius: 8,
    padding: 5,
    position: 'absolute',
    right: 15
  },
  formImageUploadRemoveIcon: {
    color: '$colorWhite',
    fontSize: 24
  },
  picker: {
    backgroundColor: '$colorWhite',
    borderRadius: 5,
    borderColor: '$lineColor',
    borderWidth: 1,
    '@media android': {
      borderRadius: 0,
    }
  },
  pickerTouchable: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '$lineColor',
    borderWidth: 1,
    marginBottom: 5,
    overflow: 'hidden',
    paddingHorizontal: 7,
    '@media android': {
      paddingVertical: 0,
    },
    '@media ios': {
      paddingVertical: 7,
    }
  },
  pickerTouchableText: {
    color: '$colorBlack',
    fontSize: 16,
    lineHeight: 26
  }
});

