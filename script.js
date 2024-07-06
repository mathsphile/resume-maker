document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const links = document.getElementById('links').value;
    const objective = document.getElementById('objective').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const interest = document.getElementById('interest').value;
    const extra = document.getElementById('extra').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(18);
    doc.text(name, 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(contact, 20, y);
    y += 10;

    doc.text(links, 20, y);
    y += 10;

    doc.setFontSize(16);
    doc.text('Career Objective:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(objective, 20, y);
    y += 10;

    doc.setFontSize(16);
    doc.text('Projects:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(projects.split('\n'), 20, y);
    y += (projects.split('\n').length * 10);

    doc.setFontSize(16);
    doc.text('Certifications:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(certifications.split('\n'), 20, y);
    y += (certifications.split('\n').length * 10);

    doc.setFontSize(16);
    doc.text('Education:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(education.split('\n'), 20, y);
    y += (education.split('\n').length * 10);

    doc.setFontSize(16);
    doc.text('Skills:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(skills, 20, y);
    y += 10;

    doc.setFontSize(16);
    doc.text('Subjects of Interest:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(interest, 20, y);
    y += 10;

    doc.setFontSize(16);
    doc.text('Extra-Curricular Activity:', 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(extra, 20, y);
    y += 10;

    doc.save(`${name}_resume.pdf`);
});
