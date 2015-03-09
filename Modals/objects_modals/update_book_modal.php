<?php
/**
 * Created by PhpStorm.
 * User: GeniuCode Pointer
 * Date: 9/25/2014
 * Time: 6:47 PM
 */
?>
<!-- The container for the list of example images -->
<div id="links"></div>
<br>


<div id="book_updateModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" dir="rtl">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2>Edit Book Information</h2>
            </div>
            <div class="modal-body">
                <div class="form col-md-12 center-block">

					<input type="hidden" id="book_id_up">
                    <div class="form-group" dir="rtl">
                        <label for=book_title_up">Title</label>
                        <input type="text" class="form-control" placeholder="Title" id="book_title_up">
                    </div>
                    <div class="form-group">
                        <label for="book_desc_up">Book Description</label>
                        <textarea class="form-control" placeholder="Book Description" id="book_desc_up" style="height: 200px"></textarea>
                    </div>
                    

					<div class="form-group">
                      <label for="book_img_up">Book Pricture</label>
                      <input type="file" name="bookimg" id="book_img_up" value="Upload File(s)">
                      <p class="help-block">Image for the book.</p>
                    </div>
                    
                    <div class="form-group">
                      <label for="book_file_up">Book File</label>
                      <input type="file" name="bookfile" id="book_file_up" value="Upload File(s)">
                      <p class="help-block">Book file.</p>
                    </div>
                  
                    <div class="form-group">
                        <button class="btn btn-default get btn-md btn-block" id="book_up">Done</button>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="col-md-12">
                    <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>

