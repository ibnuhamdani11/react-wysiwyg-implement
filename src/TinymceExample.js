import React, { Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import jsPDF from 'jspdf';
import header from './assets/images/header.PNG';
import footer from './assets/images/footer.PNG';

console.log(header);


class App extends React.Component {
 handleEditorChange = (content, editor) => {
   console.log('Content was updated:', content);
 }

 printToPdf = () => {
  // alert('hi');
  // window.print();
  // var doc = new jsPDF();
  // doc.text(10, 10, 'This is a test');
  // doc.autoPrint({variant: 'non-conform'});
  // doc.save('autoprint.pdf');

  // var doc = new jsPDF();          
  // var elementHandler = {
  //   '#ignorePDF': function (element, renderer) {
  //     return true;
  //   }
  // };
  // var source = window.document.getElementsByTagName("body")[0];
  // var source = window.document.getElementById("tinymce")
  // var source = document.querySelector("iframe")
  // doc.fromHTML(
  //     source,
  //     15,
  //     15,
  //     {
  //       'width': 180,
  //       // 'elementHandlers': elementHandler
  //     }
  //     );

  // doc.output("dataurlnewwindow");

  // document.querySelector("iframe").contentWindow.print()
  document.querySelector("#header_doc").contentWindow.print();

 }

 render() {
   return (
    <Fragment>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey="fbfv61ea1truzo55ewqwsakzgigwpmdhkw03iqerg6brt5jr"
        init={{
           height: 500,
           menubar: true,
           valid_elements : '*[*]',
           valid_styles: '*[*]',
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount print'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             table | \
             bullist numlist outdent indent | removeformat | help | print'
         }}
         onEditorChange={this.handleEditorChange}
       />
       <img id="header_doc" scr={header} />
       <button onClick={() => this.printToPdf() }>Print</button>
     </Fragment>
   );
 }
}

export default App;