import { Button, CircularProgress, MenuItem, Tooltip } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { listCandidates } from './mainCandidatesSlice';
import '../../../../../../assets/img/admin-img.png';
import { addCandidate, deleteCandidate, getCandidate, getCandidates, updateCandidate } from '../../../../../../data/candidatesData';
import { storage } from '../../../../../../helpers/db';
import HeaderFilterDate from '../headerFilterDate/headerFilterDate';
import HeaderFilterFavorite from '../headerFilterFavorite/headerFilterFavorite';
import MainCandidateDialog from '../mainCandidateDialog/mainCandidateDialog';
import './mainCandidates.css';

MainCandidates.propTypes = {
    
};

function MainCandidates(props) {
  // const classes = useStyles();
  const [candidates,setCandidates] =useState([])
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formMode, setFormMode] = useState(true);
  const [candId, setCandId] = useState('');
  const [fullname, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState(null);
  const [favorite, setFavorite] = useState('yes');
  const [calendar, setCalendar] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [filterFavorite, setFilterFavorite] = useState('');
  const typingTimeOutRef =  useRef(null)
  
  // const [urlImg,setUrlImg]=useState("")
  const dispatch = useDispatch()
  const getlist = async()=>{
    try {
      const list = await getCandidates()
      if(list){
        const action = listCandidates(list)
        dispatch(action)
        setCandidates(list)
      }else{
        setCandidates([{
          id:1,
          fullname:"vuquanghuy",
          position:"test",
          avatar:"",
          favorite:"yes",
          calendar:"5-25-2021",
          time:"7:00"
        },
        {
          id:2,
          fullname:"hương",
          position:"ăn hại",
          avatar:"",
          favorite:"no",
          calendar:"6-2-2021",
          time:"7:00"
        },
        {
          id:3,
          fullname:"hương21221",
          position:"ăn hại121",
          avatar:"",
          favorite:"yes",
          calendar:"5-20-2021",
          time:"7:00"
        }
        ])
      }
      
    } catch (error) {
      console.log("failed:",error)
      
    }
  }
  useEffect(()=>{
    getlist()
  },[])
  const filterDate = useSelector(state=>state.filterdate)

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    
  };
  
  const handleClose = () => {
    setOpen(false);
  }
  const handleFullName = (event) => {
    setFullName(event.target.value);
  }
  const handlePosition = (event) => {
      setPosition(event.target.value);
  }
  const handleChooseAvatar=(event)=>{
      if(event.target.files[0]){
        setImage(event.target.files[0])
      }
    }
    const handleUploadImage=()=>{
      if(image!==null){

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
            
        uploadTask.on(
          'state_changed',
          (snapshot)=>{
            toast.warn('Chờ load ảnh', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              
              });
          },
          (error)=>{
            console.log("failed",error)
          },
          ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
              setAvatar(url)
              setImage(null)
            })
          }
          )
      }

    }
  const handleAvatar = (event) => {
    setAvatar(event.value.target)
    
  }
  const handleFavorite = (event) => {
      setFavorite(event.target.value);
  }
  const handleTime =(event)=>{
    setTime(event.target.value);
  }
  const handleCalendar = (event) => {
      setCalendar(event.target.value);
  }
  const handleChangeSearch=(event)=>{
    if(typingTimeOutRef.current){
      clearTimeout(typingTimeOutRef.current)
    }
    typingTimeOutRef.current=setTimeout(()=>{
        const nameSearch =event.target.value
        setSearch(nameSearch)
        
    },500)
  }
  const handleChangeFavorite=(valueFavorite)=>{
    setFilterFavorite(valueFavorite)
  }
  const getOneCandidate= async (id)=>{
    try {
        setFormMode(false)
        setCandId(id)
        const response =await getCandidate(id)
        setFullName(response.fullname)
        setAvatar(response.avatar)
        
        setPosition(response.position)
        setFavorite(response.favorite)
        setCalendar(response.calendar)
        setTime(response.time)
        setOpen(true)
    } catch (error) {
      console.log("failed:",error)
    }
  }
  const deleteOneCandidate=async(id)=>{
    try {
      await deleteCandidate(id)
      getlist();
      toast('Đã xóa thành công', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
    } catch (error) {
      console.log("Failed:",error)
    }
  }
  const handleAdd=()=>{
    setOpen(true)
    setFormMode(true)
    setFullName('')
    setPosition('')
    setAvatar('')
    setFavorite('yes')
    setCalendar('')
    setTime('')
  }
  
const addCandidateHandle= async ()=>{
    try {
      if(image==null){

        const candidate ={
          fullname,
          position,
          avatar,
          favorite,
          calendar,
          time
        }
        if(formMode){
          await addCandidate(candidate)
          
          getlist()
          setOpen(false)
          setFullName('')
          setAvatar('')
          setPosition('')
          setFavorite('yes')
          setCalendar('')
          setTime('')
          toast('Đã thêm thành công', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }else{
          await updateCandidate (candId,candidate)
  
            getlist()
            setOpen(false)
            setFullName('')
            setAvatar('')
            setPosition('')
            setFavorite('yes')
            setCalendar('')
            setTime('')
            toast('Đã cập nhật thành công', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              
              });
        }
    }
    else {
      toast.warn('Chưa ấn tải ảnh!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
    }
    } catch (error) {
      console.log('failed',error)
    }
}

    return (
      
      <div className="mainview__candidates">
          <ToastContainer></ToastContainer>
        <div className="mainview__candidates--header">
          <div className="mainview__candidates--header-title">
            <h3>Candidates</h3>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAdd}
              startIcon={<AddCircle/>}
            >Add</Button>
          </div>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="mainview__candidates--header-search col-lg-4 col-md-12">
                <i className="fas fa-search" />
                <input
                   type="text" 
                   className="form-control" 
                   placeholder="Search" 
                   onChange={handleChangeSearch}/>
              </div>
              <HeaderFilterFavorite onChange={handleChangeFavorite}></HeaderFilterFavorite>
              <HeaderFilterDate ></HeaderFilterDate>
              
            </div>
          </div>
        </div>
        <div className="mainview__candidates--main">
          <div className="container">
            <div className="row d-flex align-items-center">

            {candidates.length === 0 ?(
                <CircularProgress className="loadingCand" color="primary" />
            ):(

              <>
              {candidates.filter((cand)=>{
                if(filterDate.length !== 0){
                  
                   if(
                    filterFavorite !== "" && search == '' 
                  ){ 
                    return Date.parse(filterDate[0]) <= Date.parse(cand.calendar) 
                    && Date.parse(cand.calendar) <= Date.parse(filterDate[1])
                    && cand.favorite === filterFavorite 
                  }

                  else if(
                    filterFavorite == "" && search !== '' 
                  ){ 
                    return Date.parse(filterDate[0]) <= Date.parse(cand.calendar) 
                    && Date.parse(cand.calendar) <= Date.parse(filterDate[1])
                    && cand.fullname.toLowerCase().includes(search.toLowerCase())
                  }

                  else if(
                    filterFavorite !== "" && search !== '' 
                  ){ 
                    return Date.parse(filterDate[0]) <= Date.parse(cand.calendar) 
                    && Date.parse(cand.calendar) <= Date.parse(filterDate[1])
                    && cand.fullname.toLowerCase().includes(search.toLowerCase())
                    && cand.favorite === filterFavorite 
                  }

                  else if(
                    filterFavorite == "" && search == '' 
                  ){ 
                    return Date.parse(filterDate[0]) <= Date.parse(cand.calendar) 
                    && Date.parse(cand.calendar) <= Date.parse(filterDate[1])
                  }
                }else if(filterDate.length == 0) {
                  if(filterFavorite == ""){
                    
                      if(search == ''){
                        return cand
                      } 
                      else if(  
                        cand.position.toLowerCase().includes(search.toLowerCase())
                        
                      ){
                        return cand
                      }
                      else if(  
                         cand.fullname.toLowerCase().includes(search.toLowerCase())
                      ){
                        return cand
                      }
                      
                    }
                    else if(  
                        cand.fullname.toLowerCase().includes(search.toLowerCase())
                        && cand.favorite === filterFavorite 
                    ){
                       return cand
                    }
                    else if(  
                        cand.position.toLowerCase().includes(search.toLowerCase())
                        && cand.favorite === filterFavorite 
                    ){
                      return cand
                    }
                    }
                
                 
              }).map((cand)=>(
                <div key={cand.id} className="mainview__candidate d-flex flex-column justify-content-center align-items-center text-center col-lg-4 col-md-6">
                  <div className="mainview__candidate--hearder">
                    <div className="mainview__candidate--hearder-img mainview__candidate--hearder-img1">
                      <img src={
                        cand.avatar == "" 
                        ? "https://firebasestorage.googleapis.com/v0/b/admin-reactjs.appspot.com/o/images%2Fdefault-avatar.png?alt=media&token=729d8fcb-bd96-43a1-a021-e65078c7bd4b"
                        :cand.avatar} alt=""
                       />
                    </div>
                    <div className="mainview__candidate--hearder-more">
                      <i className="fas fa-ellipsis-v"  />
                      <div className="updateDelete">
                        <MenuItem  onClick={()=>getOneCandidate(cand.id)}>Sửa</MenuItem>
                        <MenuItem  onClick={()=>deleteOneCandidate(cand.id)}>Xóa</MenuItem>
                      </div>
                    </div>
                  </div>
                  <div className="mainview__candidate--content">
                    <h4>{cand.fullname}</h4>
                    <small>{cand.position}</small>
                  </div>
                  <div className="mainview__candidate--icon">
                    
                    <i className={ cand.favorite === "yes" ?"active fas fa-heart":"fas fa-heart"} 
                        onClick={()=>getOneCandidate(cand.id)}
                    />
                    
                      <Tooltip 
                        title={cand.time +`/`+ cand.calendar}
                      >
                        <i className="far fa-calendar-alt" onClick={handleMenuOpen}/>

                      </Tooltip>
                    <i className="fas fa-comment-alt" />
                  </div>
                </div>

              ))}
              </>
            )}
              
            </div>
          </div>
        </div>
        <MainCandidateDialog
          open={open}
          close={handleClose}
          formmode={formMode}
          fullname={fullname}
          position={position}
          avatar={avatar}
          favorite={favorite}
          calendar={calendar}
          time={time}
          changeFullname={handleFullName}
          changePosition={handlePosition}
          changeFavorite={handleFavorite}
          changeTime={handleTime}
          changeAvatar={handleAvatar}
          changeCalendar={handleCalendar}
          chooseAvatar={handleChooseAvatar}
          addCandidate={addCandidateHandle}
          updateImage={handleUploadImage}
        />
      </div>
    )
}

export default MainCandidates;