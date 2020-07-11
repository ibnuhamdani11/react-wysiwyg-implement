import React, { Component, Fragment } from 'react'
import jsPDF from 'jspdf';
import header from './assets/images/header_pengadaan.PNG';
import footer from './assets/images/footer_pengadaan.PNG';
import './style.css';
import TinymceExample from './TinymceExample';

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

	// var mywindow = window.open('', 'new div');
	// mywindow.document.write('<html><head><title>my div</title>');
	/*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
	// mywindow.document.write('</head><body >');
	// var headerArea = mywindow.document.createElement("IMG");
	// headerArea.setAttribute("src", header);
	// mywindow.document.body.appendChild(headerArea);
	// mywindow.document.write(headerArea);
	// mywindow.document.body.appendChild(contentArea);
	// mywindow.document.write(contentArea);
	// mywindow.document.body.appendChild(footerArea);
	// mywindow.document.write(footerArea);

	// var contentArea = document.querySelector("iframe").contentWindow;
	// console.log('contentArea', contentArea);
	// mywindow.document.body.appendChild(contentArea);
	// var footerArea = mywindow.document.createElement("IMG");
	// footerArea.setAttribute("src", footer);

	// mywindow.document.write(printArea);
	// mywindow.document.write('</body></html>');

	// mywindow.print();
	// mywindow.close();

	// document.querySelector("iframe").contentWindow.print()

	// console.log(printArea)

	// printArea.contentWindow.print();
	// document.querySelector("#header_doc").contentWindow.print();

		window.print();

		// this.printDiv('printArea');

	}

	_renderHeader = () => {
	// Import result is the URL of your image
	return <img src={header} alt="Logo" id="header_doc" />;
	}

	_renderContent = () => {
		return (

			<div>
			<style>{"table {border-collapse: collapse; width: 100%} table, tr, td{border:1px solid black;}"}</style>
				<p>Dengan Hormat</p>
				<p> Sehubungan dengan ……………………………………., maka kami mengajukan permohonan pengadaan ………………………….. 
						dengan spesifikasi sebagai berikut: 
				</p>
				<ul>
					<li>………………………………………………………………………………</li>
					<li>………………………………………………………………………………</li>
				</ul>
				<p> Pengadaan………………………… kami ajukan sebagai ………………………………………………. </p>
				<p> Demikian permohonan ini disampaikan, atas perhatian dan kerjasamanya kami ucapkan terima kasih.</p>
				<p>Hormat kami</p>
				<p><b>Divisi SPR</b></p>
				<br/>
				{/*<br/>*/}
				<br/>
				<p><b> Errinto Pardede </b></p>
				<p>Kepala Divisi</p>

				<table>
				  <thead>
				    <tr>
				      <th colSpan="3"><b>Rekomendasi Persetujuan dan Tanda tangan</b></th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td rowSpan="2"><b><u>Arief Mulyadi</u></b><br/>Direktur Utama</td>
				      <td>Setuju</td>
				      <td style={{width: '30%', height: 50}}></td>
				    </tr>
				    <tr>
				      <td>Tidak Setuju</td>
				      <td style={{width: '30%', height: 50}}></td>
				    </tr>
				    <tr>
				      <td rowSpan="2"><b><u>Tjatur H. Priyono</u></b><br/>Direktur Keuangan</td>
				      <td>Setuju</td>
				      <td style={{width: '30%', height: 50}}></td>
				    </tr>
				    <tr>
				      <td>Tidak Setuju</td>
				      <td style={{width: '30%', height: 50}}></td>
				    </tr>				    
				  </tbody>
				</table>
			</div>
			)
		// let contentArea = document.getElementsByTagName("iframe")[0].innerHTML;
		// if (!contentArea) {
		// 	return;
		// }
		// console.log('contentArea', contentArea);
		// // return contentArea;
		// return <TinymceExample visible={false} />
	}

	_renderFooter = () => {
	// Import result is the URL of your image
	return <img src={footer} alt="Logo" id="footer_doc" />;
	}

	printDiv = (divName) => {
		// var mywindow = window.open('', 'report');
		// var printContents = document.getElementById(divName).innerHTML;
		// var originalContents = document.body.innerHTML;

		// mywindow.document.body.innerHTML = printContents;

		// mywindow.window.print();

		// document.body.innerHTML = originalContents;
	}

	render() {
		return (
			<Fragment>
				<h1>Report</h1>
				<div id="section-to-print">
				{ this._renderHeader() }
				{ this._renderContent() }
		        { this._renderFooter() }
		        </div>
				<button onClick={() => this.printToPdf() }>Print</button>
			</Fragment>
		);
	}
}

export default Report;