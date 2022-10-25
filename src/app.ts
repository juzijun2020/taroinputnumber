import { createApp } from 'vue'
import './app.scss'

import "default-passive-events";
import { Button, Icon, Category, CategoryPane, Tabbar, TabbarItem, SearchBar, Menu, MenuItem, Popover, Popup, OverLay, Navbar, Tabs, TabPane, Sku, Price, InputNumber, Swipe, Swiper, SwiperItem, FixedNav, BackTop, Sticky, Grid, GridItem, Divider, Avatar, Cell, CellGroup, Empty, Form, FormItem, Input, TextArea, CheckboxGroup, Checkbox, Elevator, Address, RadioGroup, Radio, Skeleton, Uploader, Progress, Cascader, Dialog, Steps, Step, Badge, Card, Tag, Picker, ActionSheet, Switch } from '@nutui/nutui-taro';

const nutuiComponents = [
  Button,
  Icon,
  Category,
  CategoryPane,
  Tabbar,
  TabbarItem,
  SearchBar,
  Menu,
  MenuItem,
  Popover,
  Popup, 
  OverLay,
  Navbar,
  Tabs,
  TabPane,
  Sku,
  Price,
  InputNumber,
  Swipe,
  Swiper,
  SwiperItem,
  FixedNav,
  BackTop,
  Sticky,
  Grid,
  GridItem,
  Divider,
  Avatar,
  Cell,
  CellGroup,
  Empty,
  Form,
  FormItem,
  CheckboxGroup,
  Checkbox,
  Elevator,
  Address,
  TextArea,
  Input,
  RadioGroup,
  Radio,
  Skeleton,
  Uploader,
  Cascader,
  Progress,
  Dialog,
  Steps,
  Step,
  Badge,
  Card,
  Tag,
  Picker,
  ActionSheet,
  Switch
];


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

nutuiComponents.forEach(item => { App.use(item) })

export default App
