import React, { Component, PropTypes } from 'react';
import List from './list/List';
import ListItem from './list/ListItem';
import { isEqual } from 'lodash/lang';
import classNames from 'classnames';

export default class WidgetList extends Component {

  static propTypes = {
    widgets: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { widgets } = this.props;
    return (
      <section className="main widget-list">
        <List name="widgets" >
          {widgets.widgetList.map(listitem => {
            let isSelected = isEqual(listitem, widgets.selectedWidget);
            let iconClass = classNames('fa', {
              'fa-circle-o': !isSelected,
              'fa-check-circle-o': isSelected
            });
            return (
              <ListItem
                key={ listitem.id }
                itemdata={ listitem }
                selected={ isSelected }
                onSelect={ (widget) => this.selectWidget(widget) }>
                <i className={ iconClass } style={{color: listitem.color}}></i>
                <div className="list-item-content">
                  <div className="text">
                    {listitem.name}
                  </div>
                </div>

              </ListItem>
            );
          })}
        </List>
      </section>
    );
  }

  selectWidget(widget) {
    this.props.actions.toggleWidget(widget.id);
  }
}
