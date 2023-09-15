export const prependComments = comments => ({
    type: 'PREPEND_COMMENTS',
    comments: comments
});
export const appendComments = comments =>({
    type: 'APPEND_COMMENTS',
    comments: comments
});
export const clearComments = ( ) =>({
    type: 'CLEAR'
});
export const addNewComment =  comment  =>({
    type: 'ADD_NEW_COMMENT',
    comment: comment
});
export const deleteComment = comment_id  =>({
    type: 'DELETE_COMMENT',
    comment_id: comment_id
});
export const updateComment =  comment  =>({
    type: 'UPDATE_COMMENT',
    comment: comment
});
