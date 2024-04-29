import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';
import { NoteService } from 'src/app/shared/services/note.service';
import { Notes } from 'src/app/shared/interfaces/notes';
import { NotFoundError } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  Allnotes:Notes[] =[]
  searchValue:string=''
  NoteId:string =''
  constructor(public dialog: MatDialog ,private _NoteService:NoteService , private _ToastrService:ToastrService) {}
ngOnInit(): void {
  // this.getNotes()
  this._NoteService.getNotes().subscribe({
    next:(res)=>{
        console.log(res);
        if(res.msg === 'done')
        {
          this.Allnotes = res.notes
        }
    } ,

    error:(err) =>{
          this. Allnotes = [] ; 
    }
  })
}
  


  openDialog() {
    const dialogRef = this.dialog.open(NotesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     if(result == 'add'){
      this.getNotes()
     }
    });
  }
  getNotes(){
    this._NoteService.getNotes().subscribe({
      next:(respose)=>{console.log(respose);
this.Allnotes = respose.notes
console.log(this.Allnotes);


      },
      error:(err)=>{console.log(err);
      }
    })
  }

  // DeleteNote(note : any){
  //   console.log(note);

  //   this._NoteService.deleteNotes(note._id).subscribe({
  //     next:(response)=>{console.log(response);
  //       this.getNotes()
       

  //     },
  //     error:(err)=>{console.log(err);
  //     }
  //   })
  // }
  // DeleteNote(){
  //   // console.log(note);
    
  //   this._NoteService.deleteNotes(this.NoteId).subscribe({
  //     next:(response)=>{console.log(response);
  //       this.getNotes()
  //     },
  //     error:(err)=>{console.log(err);
  //     }
  //   })
  // }
  deleteNote(deletedNote:string, noteIndex:number)
  {
    console.log(deletedNote,noteIndex);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(()=>{
          this._NoteService.deleteNotes(deletedNote).subscribe({
            next:(res)=>{
              console.log(res);
              this.ngOnInit() 
              this._ToastrService.success('the note is deleted successfully')
             
            }
          })
        });
      }
    });
    
  }

  UpdateNote(note:Notes){
    console.log("Update" , note);
    const dialogRef = this.dialog.open(NotesComponent , {data:note});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
   if(result == 'Update'){
    this.getNotes()
   }
    });
    
  }
}


