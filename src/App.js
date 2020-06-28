import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
// import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

// import Table from '@ckeditor/ckeditor5-table/src/table';

const editorConfiguration = {
    // plugins: [ TableToolbar, TableProperties, TableCellProperties ],
    toolbar: [ 'insertTable', 'TableProperties' ],

    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells',
            'TableProperties', 'tableCellProperties'
        ],

        // Configuration of the TableProperties plugin.
        tableProperties: {
            // ...
        },

        // Configuration of the TableCellProperties plugin.
        tableCellProperties: {
            // ...
        }
    }
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    // config={ editorConfiguration }
                    // table={}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;
