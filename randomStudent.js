const students = [ 'Mandahaa', 'Anar', 'Huluguu', 'Dee', 'Ziggy']
const randomStudent = () => {
    console.log(students[Math.floor(Math.random() * students.length)])

}
randomStudent()