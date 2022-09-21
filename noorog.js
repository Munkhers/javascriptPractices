const students = [ 'Mandahaa', 'Anar', 'Huluguu', 'Dee', 'Ziggy']
const randomStudent = () => {
    console.log(students[Math.floor(Math.random() * 5)])

}
randomStudent()