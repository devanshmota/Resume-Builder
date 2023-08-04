const express = require('express')
const cors = require('cors')
const validator = require('validator');

const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

const connnectionString = "mongodb://0.0.0.0:27017/resume-builder";
mongoose.connect(connnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("database connected")
})
    .catch((e) => {
        console.log("error", e);
    });

app.get('/', (req, res) => {
    res.send('hello');
})

//--------------------------------------PersonalInfo----------------------------------------------------------

const personalinfoSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Invalid email']
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isMobilePhone, 'Invalid phone number']
    },
    address: {
        type: String,
        required: true

    },
    dateOfBirth: {
        type: String,
        required: true,
        validate: [validator.isDate, 'Invalid Date']
    },
    nationality: {
        type: String,
        required: true
    },
    professionalSummary: {
        type: String,
        required: true
    }
})

const personalInformation = mongoose.model('personalInformation', personalinfoSchema);

app.post('/api/personalinfo', (req, res) => {


    // eslint-disable-next-line no-unused-vars
    const { _id,
        fullName,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        nationality,
        professionalSummary } = req.body;

    const user = new personalInformation({
        fullName,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        nationality,
        professionalSummary
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log('error saving', e);
        })
})
app.put('/api/personalinfo', async (req, res) => {
    console.log(req.body);

    const { _id, fullName,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        nationality,
        professionalSummary } = req.body;

    const data = await personalInformation.updateMany({ _id }, {
        $set: {
            fullName,
            email,
            phoneNumber,
            address,
            dateOfBirth,
            nationality,
            professionalSummary
        }
    });
    res.send(data);
})

app.get('/api/personalinfo', async (req, res) => {
    const data = await personalInformation.find();
    res.send(data);
})

// -----------------------------------EducationInfo----------------------------------------------------------

const educationinfoSchema = new mongoose.Schema({

    nameOfInstitution: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true,
    },
    graduationYear: {
        type: String,
        required: true,
    },
    cgpa: {
        type: String,
        required: true
    }

})

const educationInformation = mongoose.model('educationInformation', educationinfoSchema);

app.post('/api/educationinfo', (req, res) => {

    // eslint-disable-next-line no-unused-vars
    const { _id,
        nameOfInstitution,
        fieldOfStudy,
        degree,
        graduationYear,
        cgpa
    } = req.body;

    const user = new educationInformation({
        nameOfInstitution,
        fieldOfStudy,
        degree,
        graduationYear,
        cgpa
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/educationinfo', async (req, res) => {
    const data = await educationInformation.find();
    res.send(data);
})

app.put('/api/educationinfo', async (req, res) => {
    console.log(req.body);

    const { _id,
        nameOfInstitution,
        fieldOfStudy,
        degree,
        graduationYear,
        cgpa
    } = req.body;


    const data = await educationInformation.updateMany({ _id }, {
        $set: {
            nameOfInstitution,
            fieldOfStudy,
            degree,
            graduationYear,
            cgpa
        }
    });
    res.send(data);
})

app.delete('/api/educationinfo/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const deletedItem = await educationInformation.findOneAndDelete({ _id })
        res.send(deletedItem);
    }
    catch (error) {
        console.log(error);
    }

})

// -----------------------------------Wok Experience----------------------------------------------------------

const workExperienceSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true
    }

})

const workExperience = mongoose.model('workExperience', workExperienceSchema);


app.post('/api/workexperience', (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const { _id,
        companyName,
        jobTitle,
        startDate,
        endDate,
        jobDescription
    } = req.body;

    const user = new workExperience({
        companyName,
        jobTitle,
        startDate,
        endDate,
        jobDescription
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/workexperience', async (req, res) => {
    const data = await workExperience.find();
    res.send(data);
})

app.put('/api/workexperience', async (req, res) => {

    const { _id,
        companyName,
        jobTitle,
        startDate,
        endDate,
        jobDescription
    } = req.body;


    const data = await workExperience.updateMany({ _id }, {
        $set: {
            companyName,
            jobTitle,
            startDate,
            endDate,
            jobDescription
        }
    });
    res.send(data);
})

app.delete('/api/workexperience/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const deletedItem = await workExperience.findOneAndDelete({ _id })
        res.send(deletedItem);
    }
    catch (error) {
        console.log(error);
    }

})

// -----------------------------------Skills----------------------------------------------------------

// -----------------------------------TechSkills----------------------------------------------------------

const technicalSkillsSchema = new mongoose.Schema({

    technicalSkills: {
        type: [String],
        required: true
    }
});

const techSkills = mongoose.model('techSkills', technicalSkillsSchema);

app.post('/api/techskills', (req, res) => {

    const technicalSkills = req.body;

    const user = new techSkills({
        technicalSkills
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})


app.get('/api/techskills', async (req, res) => {
    const data = await techSkills.find();
    res.send(data);
})

app.put('/api/techskills', async (req, res) => {

    const technicalSkills = req.body;


    const data = await techSkills.updateMany({}, {
        $set: {
            technicalSkills,
        }
    });
    res.send(data);
})

// -----------------------------------SoftSkills----------------------------------------------------------

const softSkillsSchema = new mongoose.Schema({

    softSkills: {
        type: [String],
        required: true
    }
});

const soft_Skills = mongoose.model('soft_Skills', softSkillsSchema);

app.post('/api/softskills', (req, res) => {

    const softSkills = req.body;

    const user = new soft_Skills({
        softSkills
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})


app.get('/api/softskills', async (req, res) => {
    const data = await soft_Skills.find();
    res.send(data);
})

app.put('/api/softskills', async (req, res) => {

    const softSkills = req.body;


    const data = await soft_Skills.updateMany({}, {
        $set: {
            softSkills,
        }
    });
    res.send(data);
})


// -----------------------------------Projects----------------------------------------------------------

const projectSchema = new mongoose.Schema({

    projectName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    yourRole: {
        type: String,
        required: true
    }
});

const projects = mongoose.model('projects', projectSchema);

app.post('/api/projects', (req, res) => {

    // eslint-disable-next-line no-unused-vars
    const { _id,
        projectName,
        description,
        yourRole
    } = req.body;

    const user = new projects({
        projectName,
        description,
        yourRole
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/projects', async (req, res) => {
    const data = await projects.find();
    res.send(data);
})

app.put('/api/projects', async (req, res) => {

    const { _id,
        projectName,
        description,
        yourRole
    } = req.body;


    const data = await projects.updateMany({ _id }, {
        $set: {
            projectName,
            description,
            yourRole
        }
    });
    res.send(data);
})

app.delete('/api/projects/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const deletedItem = await projects.findOneAndDelete({ _id })
        res.send(deletedItem);
    }
    catch (error) {
        console.log(error);
    }

})

// -----------------------------------Certifications----------------------------------------------------------

const certificateSchema = new mongoose.Schema({

    certificationName: {
        type: String,
        required: true
    },
    issuingOrganization: {
        type: String,
        required: true
    }
});

const certificates = mongoose.model('certificates', certificateSchema);

app.post('/api/certificates', (req, res) => {

    // eslint-disable-next-line no-unused-vars
    const { _id,
        certificationName,
        issuingOrganization
    } = req.body;

    const user = new certificates({
        certificationName,
        issuingOrganization
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/certificates', async (req, res) => {
    const data = await certificates.find();
    res.send(data);
})

app.put('/api/certificates', async (req, res) => {

    const { _id,
        certificationName,
        issuingOrganization
    } = req.body;


    const data = await certificates.updateMany({ _id }, {
        $set: {
            certificationName,
            issuingOrganization
        }
    });
    res.send(data);
})

app.delete('/api/certificates/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const deletedItem = await certificates.findOneAndDelete({ _id })
        res.send(deletedItem);
    }
    catch (error) {
        console.log(error);
    }
})

// -----------------------------------Awards----------------------------------------------------------

const awardsSchema = new mongoose.Schema({

    nameOfAward: {
        type: String,
        required: true
    },
    dateWhenReceived: {
        type: String,
        required: true
    }
});

const awards = mongoose.model('awards', awardsSchema);

app.post('/api/awards', (req, res) => {

    // eslint-disable-next-line no-unused-vars
    const { _id,
        nameOfAward,
        dateWhenReceived
    } = req.body;

    const user = new awards({
        nameOfAward,
        dateWhenReceived
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/awards', async (req, res) => {
    const data = await awards.find();
    res.send(data);
})

app.put('/api/awards', async (req, res) => {

    const { _id,
        nameOfAward,
        dateWhenReceived
    } = req.body;


    const data = await awards.updateMany({ _id }, {
        $set: {
            nameOfAward,
            dateWhenReceived
        }
    });
    res.send(data);
})

app.delete('/api/awards/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const deletedItem = await awards.findOneAndDelete({ _id })
        res.send(deletedItem);
    }
    catch (error) {
        console.log(error);
    }
})

// -----------------------------------Hobbies----------------------------------------------------------

const hobbiesSchema = new mongoose.Schema({

    hobbies: {
        type: [String],
        required: true
    }
});

const hobby = mongoose.model('hobbies', hobbiesSchema);

app.post('/api/hobbies', (req, res) => {

    const hobbies = req.body

    const user = new hobby({
        hobbies
    })
    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            console.log(e);
        })
})

app.get('/api/hobbies', async (req, res) => {
    const data = await hobby.find();
    res.send(data);
})

app.put('/api/hobbies', async (req, res) => {

    const hobbies = req.body
    const data = await hobby.updateOne({}, {
        $set: {
            hobbies
        }
    });
    res.send(data);
})


app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}`);
})

