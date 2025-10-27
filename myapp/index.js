const express= require("express")   // Express লাইব্রেরি ইমপোর্ট
const app =express()                // Express অ্যাপ তৈরি

const port=3000;                    // কোন Port এ সার্ভার চলবে

app.get('/',(req,res)=>{            // / রাউটে গেলে কি দেখাবে
    res.send("hello world")         // Response পাঠাচ্ছে
})

app.listen(port,()=>{               // Server Start
    console.log(`example app listening on port ${port}`)
})
