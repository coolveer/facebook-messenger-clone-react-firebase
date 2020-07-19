import React , { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Message.css"

const Message = forwardRef( (props,ref) => {
    const isUser = props.username === props.text.username
    return (
        <div ref={ref} className={`message ${isUser && 'main_user'}`}>
            <Card className={isUser ? "user":"guest"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2"> 
                    {!isUser && `${props.text.username || 'Unknown User'} : ` }{props.text.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
)

export default Message
