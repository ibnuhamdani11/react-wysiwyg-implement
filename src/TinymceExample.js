import React, { Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
 handleEditorChange = (content, editor) => {
   console.log('Content was updated:', content);
 }

 render() {
  const { visible } = this.props;
   return (
    <Fragment style={{'display': visible == false ? 'none' : '' }}>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey="fbfv61ea1truzo55ewqwsakzgigwpmdhkw03iqerg6brt5jr"
        init={{
           height: 400,
           width: 1000,
           menubar: true,
           valid_elements : '*[*]',
           valid_styles: '*[*]',
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount print', 
             'hr'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             table | hr | \
             bullist numlist outdent indent | removeformat | help | print'
         }}
         onEditorChange={this.handleEditorChange}
       />
     </Fragment>
   );
 }
}

export default App;