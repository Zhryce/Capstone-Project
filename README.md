# Capstone-Project

Download Node.js:
[Node.js download](https://nodejs.org/en/download/)

Download VSCode:
[VSCode download](https://code.visualstudio.com/download)

# Set Up Local Database
Download MongoDB with MongoDB Compass:
[MongoDb Community download](https://www.mongodb.com/try/download/community)
- Once installed, navagate to your C: drive > Program Files > MongoDB > Server > version# folder (Ex. 5.0) > bin
- Copy the path at this from the bin directory (Ex. C:\Program Files\MongoDB\Server\5.0\bin)
- In your search bar Type in "View advanced system settings" and open it
- Click on "Environment Variables..."
- In System Variables select "Path" and press the "Edit" button
- Click on the  "New" button and paste in the path
- Click "Ok" to save on all of the System Properties windows until they are closed
- Open a new command prompt and type in the following and press enter to run Mongo Daemon on your pc
```console
mongod
```
- Ctrl + c to stop running Mongo Daemon

# Running the Program
To run the program:
- Download MongoDB (steps above)
- Open another new command prompt at '/capstone-project/server'
- Type the following into the prompt and press enter
```console
npm start
```
- Ctrl + c to stop running 