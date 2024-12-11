import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-compliance-alerts',
  templateUrl: './compliance-alerts.component.html',
  styleUrls: ['./compliance-alerts.component.css']
})
export class ComplianceAlertsComponent {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'location', 'issue', 'status', 'actions'];

  constructor(private papa: Papa) {}

  // Example data to demonstrate export
  data = [
    { id: 1, location: 'Location A', issue: 'Issue 1', status: 'Resolved' },
    { id: 2, location: 'Location B', issue: 'Issue 2', status: 'Pending' },
    // Add more data as required
  ];

  // CSV Export
  exportToCSV() {
    const csvData = this.papa.unparse(this.data); // Convert to CSV format using ngx-papaparse
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'compliance_alerts.csv';
    link.click();
  }

  // PDF Export
  exportToPDF() {
    const doc = new jsPDF();
    doc.text('Compliance Alerts', 10, 10);

    let yPosition = 20;
    this.data.forEach(item => {
      doc.text(`ID: ${item.id}`, 10, yPosition);
      doc.text(`Location: ${item.location}`, 10, yPosition + 10);
      doc.text(`Issue: ${item.issue}`, 10, yPosition + 20);
      doc.text(`Status: ${item.status}`, 10, yPosition + 30);
      yPosition += 40;
    });

    doc.save('compliance_alerts.pdf');
  }

  // File Upload (for CSV)
  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const csvData = e.target.result;
        this.papa.parse(csvData, {
          complete: (result) => {
            this.dataSource.data = result.data;
          }
        });
      };
      reader.readAsText(file);
    }
  }
}
