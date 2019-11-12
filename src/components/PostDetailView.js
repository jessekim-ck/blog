import React from 'react'
import styles from "../app.module.css";
import CustomLink from "./CustomLink";
import button_edit from "../assets/button_edit.png";
import FloatButton from "./FloatButton";
import format_datetime from "../utils/format_datetime"
import {connect} from "react-redux";
import MarkdownRenderer from "./MarkdownRenderer"


class PostDetailView extends React.Component {

    render() {
        return (
            <div >
                <CustomLink to="/category">
                    <div className={styles.postDetailCategory}>
                        {this.props.post_detail.category || 'UNCATEGORIZED'}
                    </div>
                </CustomLink>
                <div className={styles.postDetailTitle}>
                    {this.props.post_detail.title}
                </div>
                <div className={styles.postDetailSubtitle}>
                    <div>
                        Writer: {this.props.post_detail.writer}
                    </div>
                    <div>
                        Created: {format_datetime(this.props.post_detail.created)}
                    </div>
                    <div>
                        Last Updated: {format_datetime(this.props.post_detail.updated)}
                    </div>
                </div>
                <div className={styles.postDetailText}>
                    <MarkdownRenderer source={this.props.post_detail.text}/>
                </div>
                {
                    this.props.user.authenticated &&
                    <CustomLink
                        to={`/post/${this.props.post_detail.id}/edit`}
                        className={styles.floatButtonContainer} >
                        <FloatButton source={button_edit} />
                    </CustomLink>
                }
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(PostDetailView)