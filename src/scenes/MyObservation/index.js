import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  ListView,
  Alert,
  ActivityIndicator
} from 'react-native';
import { getFailedForms, uploadFailedForms } from '../../services';
import { styles } from '../../styles/common';
import { styles as addStyles } from '../../styles/scenes/Add';
import OfflineRow from './OfflineRow';

export class MyObservationScene extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows([]);
    this.state = {
      formsToSubmit: [],
      isSubmitting: false
    };
    // this.loadData();
  }

  componentDidMount() {
    this.loadData();
  }

  // attempt to upload the first cached form in the list
  onTryAgain = async () => {
    const { formsToSubmit } = this.state;
    this.setState({ isSubmitting: true });
    const success = await uploadFailedForms(formsToSubmit);
    if (!success) {
      Alert.alert('Sorry', "It looks like you still don't have network access. Please try again later.",
        [{ text: 'Close' }], { cancelable: true }
      );
    } else {
      Alert.alert('Success', 'Your offline forms have now been submitted to Water Rangers',
        [{ text: 'Continue' }], { cancelable: true }
      );
    }
    this.setState({ isSubmitting: false });
    await this.loadData();
  };

  async loadData() {
    const formsToSubmit = await getFailedForms();
    this.setState({
      formsToSubmit
    });
  }
  // remove a form once we have successfully re-uploaded it
  renderWaiting() {
    if (this.state.isSubmitting) {
      return (
        <View style={addStyles.waitingContainer}>
          <ActivityIndicator
            animating={true}
            color="white"
            size="large"
          />
        </View>
      );
    }
    return <View />;
  }
  render() {
    const dataSource = this.dataSource.cloneWithRows(this.state.formsToSubmit);
    return (
      <View style={styles.noPadContainer}>
        <Text style={[styles.headerOne, addStyles.offlineFormsHeader]}>Offline Forms</Text>
        {dataSource.getRowCount() > 0 ? (
          <View style={addStyles.offlineFormsContainer}>
            <ListView
              style={{ flex: 1 }}
              enableEmptySections={true}
              removeClippedSubviews={false}
              dataSource={dataSource}
              renderRow={(rowData, sectionID, rowID) => <OfflineRow key={rowID} {...rowData} />}
              renderSeparator={
                (sectionID, rowID) => <View key={rowID} style={addStyles.listSeparator} />
              }
            />
            <View style={addStyles.offlineFormsFooter}>
              <TouchableHighlight style={styles.button} onPress={this.onTryAgain} underlayColor="#99d9f4">
                <Text style={styles.buttonText}>Upload forms</Text>
              </TouchableHighlight>
            </View>
          </View>
        ) : (
          <View style={addStyles.offlineFormsContainer}>
            <Text style={addStyles.offlineListRowContainer}>{"You don't have any offline Observations or Issues to submit at the moment. If you are in an area with no cell or wi-fi coverage any forms you submit will be stored to upload at a later point."}</Text>
          </View>
        )}
        {this.renderWaiting()}
      </View>
    );
  }
}
