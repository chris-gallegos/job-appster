const Job = require('../../models/job')

module.exports = {
  index,
  create,
  delete: deleteJob,
  update,
  show,
};

async function index(req, res) {
    let job = null
    if(req.user){
      job = await Job.find({user : req.user._id})

    }
    res.json(job)
}

async function create(req, res) {
    req.body.user = req.user._id
    const newJob = await Job.create(req.body);
    return res.json(newJob)
}

async function deleteJob(req, res) {
    const deleteJob = await Job.findByIdAndRemove(req.params.id);
    console.log(deleteJob)
    const job = await Job.find({user : req.user._id})
    return res.json(job)
}

async function update(req, res) {
    const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updateJob)
}

async function show(req, res) {
    const oneJob = await Job.findById(req.params.selectedJob)
    return res.json(oneJob)
}