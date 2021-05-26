import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


MainCandidatePercents.propTypes = {
    
};

function MainCandidatePercents(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const candidateslist = useSelector(state=>state.candidateslist)
  var newArr = []
  newArr = candidateslist.filter(function (cand) {
    return newArr.includes(cand.position.toLowerCase()) ? '' : newArr.push(cand.position.toLowerCase())
  })
  const candidateCount = new Map([...new Set(candidateslist)].map(
    x =>[x.position,candidateslist.filter(y => y.position.toLowerCase() ===x.position.toLowerCase()).length]
  ))
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: "0",
      color: theme.palette.grey[500],
    },
  });
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <div className="container">
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
                  <div className="row">
                    {newArr.map((cand)=>(
                      <div key={cand.id} className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>
                          {cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                            && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                            && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                            && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                            && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                          }
                        </h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>{cand.position}</h4>
                        <small>{candidateCount.get(cand.position)} candidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle1">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle 
                            className="circle2" 
                            cx={18} cy={18} r={18} 
                            style={{stroke:"#fe7d50",
                                    strokeDashoffset: 114 - ( 114 *
                                       candidateCount.get(cand.position)/ 
                                       (cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                                        && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                                        && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                                        && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                                        && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                                       )
                                    *100  ) / 100
                                  }}
                        />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>
                            { Math.round(candidateCount.get(cand.position)/ 
                                       (cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                                        && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                                        && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                                        && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                                        && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                                       )
                                    *100) }
                            <span>%</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    ))}
                    
                  </div>
                </div>
      
      
    );
  });
    return (
      <div className="mainview__hire">
              <div className="mainview__hire--header d-flex justify-content-between align-items-center">
                <div className="mainview__hire--header-title">
                  <h3>You need to hire</h3>
                </div>
                <div className="mainview__hire--header-button" onClick={handleClickOpen}>
                  View all
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>

              <div className="mainview__hire--percents">
                <div className="container">
                  <div className="row">
                    {newArr.slice(0,4).map((cand)=>(
                      <div key={cand.id} className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>
                          {cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                            && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                            && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                            && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                            && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                          }
                        </h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>{cand.position}</h4>
                        <small>{candidateCount.get(cand.position)} candidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle1">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle 
                            className="circle2" 
                            cx={18} cy={18} r={18} 
                            style={{stroke:"#fe7d50",
                                    strokeDashoffset: 114 - ( 114 *
                                       candidateCount.get(cand.position)/ 
                                       (cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                                        && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                                        && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                                        && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                                        && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                                       )
                                    *100  ) / 100
                                  }}
                        />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>
                            { Math.round(candidateCount.get(cand.position)/ 
                                       (cand.position.toLowerCase().includes("bảo vệ".toLowerCase())? "3" : "1" 
                                        && cand.position.toLowerCase().includes("front".toLowerCase())? "5" : "1"
                                        && cand.position.toLowerCase().includes("back".toLowerCase())? "3" : "1"
                                        && cand.position.toLowerCase().includes("ux".toLowerCase())? "2" : "1"
                                        && cand.position.toLowerCase().includes("manager".toLowerCase())? "2" : "1"
                                       )
                                    *100) }
                            <span>%</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    ))}
                    
                  </div>
                </div>
                <Dialog className="123"  onClose={handleClose}  open={open}>
                  <DialogTitle   onClose={handleClose}>
                  
                  </DialogTitle>
                  
                </Dialog>
              </div>
        </div>
        
    );
}

export default MainCandidatePercents;