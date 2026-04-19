const certificateDatabase = [
    {
        studentID: 'CSR2026A7B',
        studentName: 'Rohan Sharma',
        completionDate: 'April 19, 2026',
        internshipStatus: 'Yes'
    }
];

// In a real application, this would be an API, but for this static site, 
// we attach it to the window object to be accessible from verification.html
window.certificateDatabase = certificateDatabase;
