
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  
constructor(private _FormBuilder:FormBuilder , private _NoteService:NoteService , private toastr: ToastrService , private _MatDialogRef:MatDialogRef<''>,@Inject(MAT_DIALOG_DATA) public data:any){
  console.log(this.data);
  
}

form:FormGroup = this._FormBuilder.group({
  title:[this.data?this.data.title:'',[Validators.required]],
  content:[this.data?this.data.title:'',[Validators.required]]
})
sendData(){
  console.log(this.form);
  if(this.data ==null){
    this.addNotes()
  }
  else{
    this.UpdateNote()
  }
  
 
  
}
addNotes(){
 this._NoteService.addNotes(this.form.value).subscribe({
  next:(response)=>{console.log(response);
    this.toastr.success('added note ' + response.msg)
    this._MatDialogRef.close('add')
  },
  error:(err)=>{console.log(err);
  }
 })
  
}
UpdateNote(){
  console.log(this.data._id , this.form.value);
  this._NoteService.UpdateNotes(this.data._id , this.form.value).subscribe({
    next:(response)=>{console.log(response);
      this._MatDialogRef.close('Update')
    },
    error:(err)=>{console.log(err);
    }
  })
}
}
