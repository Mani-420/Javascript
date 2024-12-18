
const square = (number) => {
    return number*number;
}

console.log(square(5))

// -----------------------------------------------

const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false}
]

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);