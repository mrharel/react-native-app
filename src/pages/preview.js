import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pdf from 'react-native-pdf';

let source = {uri:'https://drive.google.com/file/d/0B2JcgwCU1bghSHBjNlB0ZElQUGM/view?usp=sharing',cache:false};

class FilePreviewPage extends React.Component {
  static navigationOptions = {
    title: 'Preview',
  };


  render() {
    const {
      selectedFileIndex,
      files,
    } = this.props;

    if (selectedFileIndex === null) {
      return <View/>;
    }

    const fileData = files[selectedFileIndex];
    console.log("file data = ", fileData);

    return (
      <View style={styles.container}>
        {fileData.fileType === 'image' &&
          <Image
            source={{ uri: fileData.filePath}}
            resizeMode="cover"
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
          />}
        {fileData.fileType === 'pdf' &&
        <Pdf ref={(pdf)=>{this.pdf = pdf;}}
             source={source}
             page={1}
             scale={1}
             horizontal={false}
             onLoadComplete={(pageCount,pdfPath)=>{
               //this.setState({pageCount: pageCount});
               console.log(`total page count: ${pageCount} path:${pdfPath}`);
             }}
             onPageChanged={(page,pageCount)=>{
               //this.setState({page:page});
               console.log(`current page: ${page}`);
             }}
             onError={(error)=>{
               console.log(error);
             }}
             style={styles.pdf}/>
        }
      </View>
    );
  }
}

// FilePreviewPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   files: PropTypes.arrayOf(PropTypes.shape({
//     fileName: PropTypes.string.isRequired,
//     fileData: PropTypes.any,
//     uploadedAt: PropTypes.number.isRequired,
//     fileSize: PropTypes.number.isRequired,
//     filePath: PropTypes.string.isRequired,
//     fileType: PropTypes.string.isRequired,
//   })),
//   selectedFileIndex: PropTypes.number,
// };

const mapStateToProps = state => ({
  files: state.files.files,
  selectedFileIndex: state.files.selectedFileIndex,
});

const styles = StyleSheet.create({
  pdf: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default connect(mapStateToProps)(FilePreviewPage);
