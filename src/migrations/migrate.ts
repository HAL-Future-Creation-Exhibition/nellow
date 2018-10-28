import ProvidingDestination from '../models/providingDestination'

class Migrate {
    run() {
        var promise = ProvidingDestination.remove({})
        promise.then((doc) => {
            var destinations = [
                {
                    _id: 1,
                    name: 'サーバー',
                    rate: 1000
                },
                {
                    _id: 2,
                    name: 'ストレージ',
                    rate: 1200
                },
                {
                    _id: 3,
                    name: 'AI',
                    rate: 1600
                },
                {
                    _id: 4,
                    name: '演算',
                    rate: 700
                }
            ];
            destinations.forEach(element => {
                var providingDestination = new ProvidingDestination()
                providingDestination._id = element._id
                providingDestination.name = element.name
                providingDestination.rate = element.rate
                providingDestination.save()
            });
        });
    }
}

var migrate = new Migrate()

export default migrate
