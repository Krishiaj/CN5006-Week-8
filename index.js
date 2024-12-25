mongoose = require('mongoose');
//app = express();
const MONGO_URI =  'mongodb+srv://localhost:5001/Week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology:true,useNewUrlParser: true})
.then(()=> console.log('Connected to MongoDB Successfully!'))
.catch(err => console.error('Could not connect to MongoDB:', err));
  const db=mongoose.connection;
  db.on('error', function(err)
  {console.log("Error occured during connection"+err)}
);

db.once('connected', function() {
  console.log('Connected to ${MONGO_URI}');
});

//creating the schema
const PersonSchema = new mongoose.Schema({name: {
  type: String, required: true
},
age: Number, Gender:String, Salary:Number
});

//creating model named as modelname with collection named as personcollection 
const person_doc = mongoose.model('modelname', PersonSchema, 'personcollection');

//creating a single document
const doc1 = new person_doc({ name: 'Jacky',age:362,Gender:"Male",Salary:3456 });
manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
  ,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
  ,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
  { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
  ]
  person_doc.insertMany(manypersons).then(function(){
  console.log("Data inserted") // Success
  }).catch(function(error){
  console.log(error) // Failure
  });   

//adding one document in the collection

doc1
 
  .save()
  .then((doc1)=>{
    console.log("New Article has been added into your Database.",doc1);
  })
  .catch((err)=>{
    console.error(err);
  });

