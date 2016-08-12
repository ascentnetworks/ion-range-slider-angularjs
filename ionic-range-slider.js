/**
 * @Original Author: Geoffrey Bauduin <bauduin.geo@gmail.com>
 * forked project...by djkooks <inylove82@gmail.com>
 * github: https://github.com/djKooks/ion-range-slider-angularjs.git
 */

angular.module("ion.rangeslider", []);

angular.module("ion.rangeslider").directive("ionRangeSlider", [
    function () {

        return {
            restrict: "E",
            scope: {
                min: "=",
                max: "=",
                type: "@",
                prefix: "@",
                maxPostfix: "@",
                prettify: "@",
                grid: "@",
                gridMargin: "@",
                postfix: "@",
                step: "@",
                hideMinMax: "@",
                hideFromTo: "@",
                from: "=",
                to: "=",
                disable: "=",
                onChange: "&",
                onFinish: "&"
            },
            replace: true,
            link: function (scope, element) {
                element.ionRangeSlider({
                    min: scope.min,
                    max: scope.max,
                    type: scope.type,
                    prefix: scope.prefix,
                    maxPostfix: scope.maxPostfix,
                    prettify: scope.prettify,
                    grid: scope.grid,
                    gridMargin: scope.gridMargin,
                    postfix: scope.postfix,
                    step: scope.step,
                    hideMinMax: scope.hideMinMax,
                    hideFromTo: scope.hideFromTo,
                    from: scope.from,
                    to: scope.to,
                    disable: scope.disable,
                    onChange: function (val) {

                        scope.$apply(function () {
                            scope.from = val.from;
                            scope.to = val.to;
                            scope.onChange && scope.onChange({
                                val: val
                            });
                        });
                    },
                    onFinish: scope.onFinish
                });

                var watchers = [];
                var slider = element.data("ionRangeSlider");
                watchers.push(scope.$watch("min", function (value) {
                    element.data("ionRangeSlider").update({
                        min: value
                    });

                }));
                watchers.push(scope.$watch('max', function (value) {
                    element.data("ionRangeSlider").update({
                        max: value
                    });
                }));
                watchers.push(scope.$watch('from', function (value) {

                    if(slider.old_from != value) {
                        slider.update({
                            from: value
                        });
                    }
                }));
                watchers.push(scope.$watch('to', function (value) {

                    if(slider.old_to != value) {
                        slider.update({
                            to: value
                        });
                    }
                }));
                watchers.push(scope.$watch('type', function (value) {
                    element.data("ionRangeSlider").update({
                        type: value
                    });
                }));
                watchers.push(scope.$watch('disable', function (value) {
                    element.data("ionRangeSlider").update({
                        disable: value
                    });
                }));
            }
        }

    }
]);
