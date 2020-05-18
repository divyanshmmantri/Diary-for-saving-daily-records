const path=require('path')
const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const app=express()
mongoose.connect("mongodb://127.0.0.1:27017/user-mongoose",{
    useNewUrlParser:true,
    useCreateIndex:true
})
app.use(express.static(path.join(__dirname,'../public')))


const contact=mongoose.model('contact',{
    name:{
        type:String
    },
    pno:{
        type:String
    },
    date:{
        type:String
    },
    uemail:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    }

})
const review=mongoose.model('review',{
    date:{
        type:String
    },
    emotion:{
         type:String
    },
    body:{
        type:String
    }
})
const reminder=mongoose.model('reminder',{
    date:{
        type:String
    },
    time:{
        type:String
    },
    location:{
        type:String
    },
    reminder:{
        type:String
    },
    meeting:{
        type:String
    }
})
const schedule=mongoose.model('schedule',{
    date:{
        type:String
    },
    time:{
        type:String
    },
    location:{
        type:String
    },
    activity:{
        type:String
    }
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contacts',(req,res)=>{
    
    const n_contact=new contact(req.body)    
    n_contact.save().then(()=>{
        res.send('Successfully inserted')
    }).catch((error)=>{
        res.send(error)
    })
})
app.get('/views',(req,res)=>{
    contact.find({}).then((contacts)=>{
        res.send(contacts)
    }).catch((error)=>{
        res.send(error)
    })
})
app.post('/review',(req,res)=>{
    const n_review=new review(req.body)
    n_review.save().then(()=>{
        res.send('Successfully inserted')
    }).catch((error)=>{
        res.send(error)
    })
})
app.get('/view_review',(req,res)=>{
    review.find({}).then((reviews)=>{
        res.send(reviews)
    }).catch((error)=>{
        res.send(error)
    })
})
app.post('/reminder',(req,res)=>{
    const n_reminder=new reminder(req.body)
    n_reminder.save().then(()=>{
           res.send('Successfully inserted')
    }).catch((error)=>{
        res.send(error)
    })
})
app.get('/view_reminder',(req,res)=>{
    reminder.find({}).then((reminders)=>{
        res.send(reminders)
    }).catch((error)=>{
        res.send(error)
    })
})
app.post('/schedule',(req,res)=>{
    const n_schedule=new schedule(req.body)
    n_schedule.save().then(()=>{
        res.send('Successfully inserted')
    }).catch((error)=>{
        res.send(error)
    })
})
app.get('/view_schedule',(req,res)=>{
    schedule.find({}).then((schedules)=>{
        res.send(schedules)
    }).catch((error)=>{
        res.send(error)
    })
})
app.listen(3000,()=>{
    console.log('server is set')
})
