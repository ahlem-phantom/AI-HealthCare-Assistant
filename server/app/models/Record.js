var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// permet de créer l'entity


var Record = new Schema({
        userid: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        probActive: { type: Array },
        // [{
        //     probleme: { type: String, required: false }
        // }],
        ancienProb: { type: Array },
        //  [{
        //     probleme: { type: String, required: false },
        //     date: { type: String, required: false }
        // }],
        resLabo: { type: Array },
        //  [{
        //     res: { type: String, required: false }
        // }],
        familiale: { type: Array },
        // [{
        //     ant: { type: String, required: false }
        // }],
        resImg: { type: Array },
        // [{
        //     res: { type: String, required: false }
        // }],
        style: { type: Array },
        // [{
        //     style: { type: String, required: false }
        // }]
        notes: { type: Array },
        prescripton: { type: Array },
        allergie: { type: Array },
        medication: { type: Array },


    })
    // module.exports = mongoose.model("Record", Record);
module.exports = mongoose.model("Record", Record)

// module.exports = router;