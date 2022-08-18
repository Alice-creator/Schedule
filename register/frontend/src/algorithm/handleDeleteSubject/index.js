/*
Task: Xóa, chọn nhóm (1)
Các bước thực hiện
1. Xử lí data
- sắp xếp các nhóm trong môn học theo format: lt -> th 1 -> th 2 -> th n -> lt 2 -> ...
- bỏ các môn lí thuyết vào thuộc tính của các môn th, nếu mảng ko có môn th thì xem các môn lt là môn th và cho thuộc tính lt giả

2. Xóa nhóm
- Tìm môn có id giống với id môn cần xóa
- xóa môn học xóa cả môn th nếu bị xóa môn lt trong cặp th-lt

3. Trả data về như cũ
- Sử dụng hàm trả data

4. Chọn lại nhóm đã xóa
- Ý tưởng ở hàm reAdd là quá rõ ràng

5. Trả data về như cũ
- Sử dụng hàm trả data
*/
//data lúc đầu sẽ ko bị thay đổi

export const handleDeleteSubject = (deleted, list, setGroupSubjects, setDeletedSubject) => {
    let fakeLT = {
        "_id": "",
        "sub-group": "",
        "day": "2",
        "week": "-------------------------------",
        "period": "----------------",
    };
    
    /**
     * @param {Array} list mảng chứa nhóm 1 môn học
     * @returns mảng đã được sắp xếp theo cấu trúc [lí thuyết, thực hành, ...]
     */

     function Arrange(list)
     {
         let Group = []
         let RS = new Array()
         for(let i = 0; i < 1000; i++)
         {
             Group.push([])
         }
     
         for(let i in list)
         {
             if(list[i]["sub-group"] == "" && Group[parseInt(list[i]["group"])][0] !== "")
             {
                 Group[parseInt(list[i]["group"])].splice(0, 0, list[i])
             }
             else
             {
                 Group[parseInt(list[i]["group"])].push(list[i])
             }
         }
     
         for(let i of Group)
         {
             for(let j in i)
                 {
                     if(j != 0)
                         i[j]["sub-group"] = "0" + j
                 }
                 RS = RS.concat(i)
         }
     
         return RS
     }
     
    
    /**
     * thêm thuộc tính lí thuyết vào cho các môn học
     * @input ([{môn học}, ...])
     * @param {Array} list mảng môn học
     */
    function THLT(list)
    { 
        if(list.length >= 2)
        {
            let tempLT;
            for(let i = 0; i < list.length - 1; i++)
            {
                if(list[i]["sub-group"] !== "")
                {
                    list[i]["lt"] = tempLT;
                }
                else if(list[i + 1]["sub-group"] !== "")
                {
                    tempLT = list[i];
                    list.splice(i, 1);
                    i--;
                }
                else
                {
                    list[i]["lt"] = fakeLT;
                }
            }
            if(list[list.length - 1]["sub-group"] !== "")
                list[list.length - 1]["lt"] = tempLT;
            else
                list[list.length - 1]["lt"] = fakeLT;
        }
        else if(list.length == 1)
        {
            list[0]["lt"] = fakeLT;
        }
    }
    
    /**
     * 
     * @param {Array} list mảng nhóm của 1 môn học
     * @returns mảng mới bao gồm thực hành và lí thuyết
     */
    function decodeGr(list)
    {
        let preLT = fakeLT;
        let newGr = [];
        for(let i = 0; i < list.length; i++)
        {
            if(JSON.stringify(list[i]["lt"]) !== JSON.stringify(fakeLT) && JSON.stringify(list[i]["lt"]) !== JSON.stringify(preLT))
            {
                newGr.push(list[i]["lt"]);
                preLT = list[i]["lt"];
            }  
            delete list[i]["lt"];
            newGr.push(list[i]);
        }
    
        return newGr;
    }
    
    //dùng để xóa 1 nhóm (xóa cả th và lt)
    /**
     * xóa 1 nhóm 
     * @param {Array} delGr group bị xóa [{môn học}]
     * @param {Array} list mảng nhóm 1 môn học [{môn học}, {môn học}, ...]
     * @param {Array} deleted mảng lưu phần tử bị xóa [{môn lt}, {môn th}, ...]
     * @returns mảng nhóm mới, nhóm đã bị xóa
     */
     function Terminate(delGr, list, deleted)
    {   
        THLT(list)
        let tempDeleted = []
        for(let i = 0; i < list.length; i++)
        {
            if(delGr._id == list[i]["_id"] || delGr._id == list[i]["lt"]["_id"])
            {
                tempDeleted.push(list[i])
                if(delGr._id == list[i]["_id"])
                {
                    for(let j = 0; j <list.length; j++)
                    {
                        if(list[i]["lt"]["_id"] == list[j]["lt"]["_id"] && i != j)
                        {
                            tempDeleted[tempDeleted.length - 1]["lt"] = fakeLT
                            break
                        }
                    }
                }     
                list.splice(i, 1);
                i--;
            }
        }
        deleted = deleted.concat(decodeGr(tempDeleted))
        return [decodeGr(list), deleted]
    }
      
     
    
    //dùng để chọn lại 1 nhóm (chọn lại cả th và lt)
    /*lưu ý*/
    /*
    hàm sẽ khôi phục tất cả nhóm trong mảng deleted
    */
    /**
     * 
     * @param {Array} deleted mảng chứa nhóm bị xóa
     * @param {Array} list mảng chứa nhóm 1 môn
     * @returns mảng đã được add nhóm bị xóa 
     */
    //biến sao chép mảng subjects
    let copySJ = JSON.parse(JSON.stringify(list));
    // biến chứa nhóm bị xóa
    let deletedSJ = [];

    //Bước 1 sắp xếp thứ tự nhóm trong mảng lt -> th -> th
    copySJ = Arrange(copySJ);
    //Bước 2 xóa nhóm
    [copySJ, deletedSJ] = Terminate(deleted, copySJ, deletedSJ);


    setGroupSubjects(copySJ)
    for(let i = 0; i < deletedSJ.length; i++) {
        setDeletedSubject((prev) => [...prev, deletedSJ[i]])
    }
}
