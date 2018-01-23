import Noty from 'noty';

class NotificationService {
    success(message) {
        new Noty({
            theme: 'bootstrap-v4',
            type: 'success',
            layout: 'topLeft',
            text: message,
            timeout: 2000
        }).show();
    }
}

export default new NotificationService();
