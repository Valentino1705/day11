const submitData = () => {
    const projectName = document.getElementById('project-name').value
    const startDate = document.getElementById('start-date').value
    const endDate = document.getElementById('end-date').value
    const description = document.getElementById('description').value

    const data = {
        projectName,
        startDate,
        endDate,
        description
    }

    console.log('data', data)
}