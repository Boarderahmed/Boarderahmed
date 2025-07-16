              Update.style.display = "none"
            Update.style.backgroundColor = "red"
            let noteData = []
            let editIndex;
            Modal.style.display= "none"
              const btn=()=> {
                if (note.value.trim() === "") {
                   show.innerHTML = ""
                }
                else {
                   noteData.push(note.value)
                   show.innerHTML = " ";
                    localStorage.setItem("note", JSON.stringify(noteData))
                    console.log(noteData)
                   noteData.forEach((item, i)=> {
                        show.innerHTML += `<div style="display: flex; justify-content:space-between; gap: 2em;  overflow-x:auto;  scrollbar-color: white ;">
                        <div>
                        <input type="checkbox" onclick="Tick()" id="tick"/>${i + 1}. ${noteData[i]}
                        </div>
                        <br/>
                        <div style="display:flex; justify:center;align-items:center;gap:10px;">
                        <button onclick="handleDel(${i})" style="background: red;">Delete</button>
                        <button onclick="handleEdit(${i})" style="background-color: green;">Edit</button>
                        <button onclick="View(${i})"style="background:gray;">View</button>
                        </div>
                        </div><br/><hr style="margin:10px;"/>`
                    })
                }
                note.value = ""

            }
            const handleDel=(index)=> {
                localStorage.setItem("note", JSON.stringify(noteData))
                show.innerHTML = " ";
                noteData.splice(index, 1)
                console.log(noteData)
                    noteData.forEach((item, i)=> {
                        show.innerHTML += `<div style="display: flex; justify-content:space-between;gap: 2em;  overflow-x:auto;justify:center;align-items:center;gap:10px;  scrollbar-color: white ;">
                        <div>
                        <input type="checkbox" onclick="Tick()" id="tick"/>${i + 1}. ${noteData[i]}
                        </div>
                        <br/>
                        <div style="display:flex;">
                        <button onclick="handleDel(${i})" style="background: red;">Delete</button>
                        <button onclick="handleEdit(${i})" style="background-color: green;">Edit</button>
                        <button onclick="View(${i})"style="background:gray;">View</button>
                        </div>
                        </div><br/><hr style="margin:10px;"/>`
                 })
                }

          const handleEdit=(index)=> {
                localStorage.setItem("note", JSON.stringify(noteData))
                editIndex = index
                note.value = noteData[index]
                Update.style.display = "block"
                Update.style.backgroundColor = "red"
                tondo.style.display = "none"
            }
            const btn1=()=> {
                localStorage.setItem("note", JSON.stringify(noteData))
                noteData[editIndex] = note.value
                show.innerHTML = " "
                Update.style.display = "none"
                tondo.style.display = "block"
                 noteData.forEach((item, i)=> {
                        show.innerHTML += `<div style="display: flex; justify-content:space-between; gap: 2em;  overflow-x:auto;justify:center;  scrollbar-color: white ; align-items:center;gap:10px;">
                        <div>
                        <input type="checkbox" onclick="Tick()" id="tick"/>${i + 1}. ${noteData[i]}
                        </div>
                        <br/>
                        <div style="display:flex;">
                        <button onclick="handleDel(${i})" style="background: red;">Delete</button>
                        <button onclick="handleEdit(${i})" style="background-color: green;">Edit</button>
                        <button onclick="View(${i})"style="background:gray;">View</button>
                        </div>
                        </div> <br/><hr style="margin:10px;"/>`
                    })
                }
                const View=(index)=>{
                    let noteData = JSON.parse(localStorage.getItem("note"))
                    let noteDetails = noteData[index]
                    notedetails.innerHTML = noteData[index]
                    Modal.style.display = "block";
                }
                function handleClose(){
            Modal.style.display = "none";
            
        }
                function getWrite() {
                noteData = JSON.parse(localStorage.getItem("note"))
                   noteData.forEach((item, i)=> {
                        show.innerHTML += `<div style="display: flex;justify-content:space-between; gap: 2em;  overflow-x:auto; scrollbar-color: white ; justify:center;align-items:center;gap:10px;">
                        <div>
                        <input type="checkbox" onclick="Tick()" id="tick"/>${i + 1}. ${noteData[i]}
                        </div>
                        <br/>
                        <div style="display:flex;">
                        <button onclick="handleDel(${i})" style="background: red;">Delete</button>
                        <button onclick="handleEdit(${i})" style="background-color: green;">Edit</button>
                        <button onclick="View(${i})"style="background:gray;">View</button>
                        </div>
                        </div><br/><hr style="margin:10px;"/>   `
                    })
                } getWrite();
        
        
