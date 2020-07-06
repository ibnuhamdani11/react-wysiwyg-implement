import React, { Component, Fragment } from 'react'
import jsPDF from 'jspdf';
import header from './assets/images/header.PNG';
import footer from './assets/images/footer.PNG';
import './style.css';

class Report extends Component {

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
	var headerArea = document.getElementById("header_doc").outerHTML; 
	// var contentArea = document.querySelector("iframe").contentWindow;
	var contentArea = document.getElementsByTagName("iframe")[0];
	var footerArea = document.getElementById("footer_doc").outerHTML;

	console.log(headerArea);
	console.log(contentArea);
	console.log(footerArea);

	// var printArea = headerArea+contentArea+footerArea;
	// console.log('printArea', printArea);

	var mywindow = window.open('', 'new div');
	mywindow.document.write('<html><head><title>my div</title>');
	/*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
	mywindow.document.write('</head><body >');
	// var headerArea = mywindow.document.createElement("IMG");
	// headerArea.setAttribute("src", header);
	// mywindow.document.body.appendChild(headerArea);
	// mywindow.document.write(headerArea);
	mywindow.document.body.appendChild(contentArea);
	// mywindow.document.write(contentArea);
	// mywindow.document.body.appendChild(footerArea);
	// mywindow.document.write(footerArea);

	// var contentArea = document.querySelector("iframe").contentWindow;
	// console.log('contentArea', contentArea);
	// mywindow.document.body.appendChild(contentArea);
	// var footerArea = mywindow.document.createElement("IMG");
	// footerArea.setAttribute("src", footer);

	// mywindow.document.write(printArea);
	mywindow.document.write('</body></html>');

	mywindow.print();
	mywindow.close();

	// document.querySelector("iframe").contentWindow.print()

	// console.log(printArea)

	// printArea.contentWindow.print();
	// document.querySelector("#header_doc").contentWindow.print();

	}

	_renderHeader = () => {
	// Import result is the URL of your image
	return <img src={header} alt="Logo" className="hide" id="header_doc" />;
	}

	_renderFooter = () => {
	// Import result is the URL of your image
	return <img src={footer} alt="Logo" className="hide" id="footer_doc" />;
	}

	render() {
		return (
			<Fragment>
				<h1>Report</h1>
				{ this._renderHeader() }
		        { this._renderFooter() }
				<button onClick={() => this.printToPdf() }>Print</button>
			</Fragment>
		);
	}
}

export default Report;