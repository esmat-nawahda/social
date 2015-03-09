$.routes.add('/', homeModule.goHome);
$.routes.add('', homeModule.goHome);


$.routes.add('/admins/insert', adminModule.insert);
$.routes.add('/admins/list', adminModule.list);

$.routes.add('/books/insert', bookModule.insert);
$.routes.add('/books/list', bookModule.list);

$.routes.add('/ads/insert', adModule.insert);
$.routes.add('/ads/list', adModule.list);


