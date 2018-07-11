import * as React from 'react';

import * as $ from 'jquery';


import './GroupTree.css';
import Igroup from '../interfaces/igroup'
import Event = JQuery.Event;

//const Group =require('./models/Group')

interface Iprops {
    items: Igroup,
    updateCurGroup: (item: Igroup) => void
}


class GroupsTree extends React.Component<Iprops,{}> {
    constructor(props: Iprops) {
        super(props)
    }

    public componentDidUpdate() {
        if (this.props.items.childs) {
            const uls = $('.GroupsList')
            // console.log($('.GroupsList .GroupNode'))
             $('.GroupsList .GroupNode').remove()
            this.load(this.props.items, uls, 0)
        }
    }
    componentDidMount(){
        if (this.props.items.childs) {
            const uls = $('.GroupsList')
            // console.log($('.GroupsList .GroupNode'))
            $('.GroupsList .GroupNode').remove()
            this.load(this.props.items, uls, 0)
        }
    }
    shouldComponentUpdate(nextProps: Iprops) {
        return this.props.items !== nextProps.items;

    }

    public render() {
        return (<div>
                <ul className="GroupsList" />
            </div>
        )
    }

    load(items:Igroup, $parentLi: JQuery, count: number) {
        for (let key in items.childs) {
        const group= items.childs[key]
            let $li = $(`<li class='GroupNode' data-level="${count}" >
        ${group.name} </li>`)
            $li.data("item", group)
            $li.click((e) => {
                this.paintLi($(e.currentTarget))
            });

            $li.css('paddingLeft', ((count + 1) * 10 + 10 + "px"));
            if (group.type === 1) {//user node
                $li.prepend(`<img src ='./icons/man.png' style="vertical-align: center" />`)
                $li.addClass("userli")
            }
            else {//group or empty group node
                $li.prepend(`<img src ='./icons/users.png' style="vertical-align: center" />`)
                $li.addClass("groupli")
                $li.dblclick((e) => {
                    this.openGroup(group, $li, count)
                });
                $li.on('openGroup', (e, arrow) => {

                    if (arrow === 'right') {

                        this.openGroup(group, $li, count)
                    }
                })
            }

            if (count > 0) {//select the group name
                $li.on('selectGroupName', (e, arrow) => {
                    this.selectGroupName($li)
                })
            }

            ($parentLi.prop("tagName") === 'UL') ? $parentLi.append($li) : $parentLi.after($li);
        }
    }


    public openGroup(item: Igroup, $li: JQuery, count: number) {
        // if(item.show=undefined)
        this.load(item, $li, ++count)
        item.show = true;

        $li.unbind('dblclick')
        $li.unbind('openGroup')

        item.show = true;
        $li.dblclick((e: Event<HTMLElement>)=> {
            if (!item.show) {
                this.showLi(item, $li)
            } else {
                this.hideLi(item, $li)
            }
        })

        $li.on('openGroup', (e: Event<HTMLElement>, arrow: string) => {
            if (!item.show && arrow === 'right') { //open group
                this.showLi(item, $li)
            } else if (arrow === 'left') {//close group
                this.hideLi(item, $li)
            }


        })
    }

    selectGroupName($li: JQuery) {
        const liLevel = $li.attr('data-level')
        while ($li.prev().attr('data-level') === liLevel) {
            $li = $li.prev();
        }
        this.paintLi($li.prev())

    }

    hideLi(item: Igroup, $li: JQuery) {
        $li = $li.next()
        const level = $li.attr("data-level")
        while ($li.attr("data-level") >= level) {
            $li.hide();
            $li = $li.next()
        }
        this.applyShowOnTree(item, false)

    }

    showLi(item: Igroup, $li: JQuery) {
        $li = $li.next()
        const level = $li.attr("data-level")
        while ($li.attr("data-level") === level) {
            $li.show();
            $li = $li.next()
        }
        item.show = true;
    }

    applyShowOnTree(item: Igroup, bool: boolean) {
        item.show = bool;
        if (item.childs) {
            for (let key in item.childs) {

                if (item.childs[key].childs) {
                    this.applyShowOnTree(item.childs[key], bool)
                }
            }
        }
    }

    paintLi($li: JQuery) {
        $('li').removeClass('selected');
        $li.addClass('selected');
        console.log($li)

        this.props.updateCurGroup($li.data('item'))
    }

}

export default GroupsTree;
