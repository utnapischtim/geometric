import tape from "tape";
import { pointLeftofLine, pointRightofLine, pointOnLine, pointWithLine, Point, Line } from "../src/";


const line = new Line(new Point(1, 0), new Point(1, 2));

tape("pointLeftofLine(point, line) determines whether a point is to the left of a line", (test: any) => {
    test.equal(pointLeftofLine(new Point(0, 1), line), true);
    test.equal(pointLeftofLine(new Point(1, 1), line), false);
    test.equal(pointLeftofLine(new Point(2, 1), line), false);
    test.equal(pointLeftofLine(new Point(0, 1), line.reverse()), true);
    test.equal(pointLeftofLine(new Point(1, 1), line.reverse()), false);
    test.equal(pointLeftofLine(new Point(2, 1), line.reverse()), false);
    test.end();
});

tape("pointRightofLine(point, line) determines whether a point is to the right of a line", (test: any) => {
    test.equal(pointRightofLine(new Point(0, 1), line), false);
    test.equal(pointRightofLine(new Point(1, 1), line), false);
    test.equal(pointRightofLine(new Point(2, 1), line), true);
    test.equal(pointRightofLine(new Point(0, 1), line.reverse()), false);
    test.equal(pointRightofLine(new Point(1, 1), line.reverse()), false);
    test.equal(pointRightofLine(new Point(2, 1), line.reverse()), true);

    test.end();
});

tape("pointOnLine(point, line) determines whether a point is collinear with a line and is also on the line segment", (test: any) => {
    test.equal(pointOnLine(new Point(0, 1), line), false);
    test.equal(pointOnLine(new Point(1, 1), line), true);
    test.equal(pointOnLine(new Point(2, 1), line), false);

    // The point cannot be located outside of the line segment
    test.equal(pointOnLine(new Point(1, 100), line), false);

    test.end();
});

tape("pointWithLine(point, line) determines whether a point is collinear with a line", (test: any) => {
    test.equal(pointWithLine(new Point(0, 1), line), false);
    test.equal(pointWithLine(new Point(1, 1), line), true);
    test.equal(pointWithLine(new Point(2, 1), line), false);

    // The point can be located outside of the line segment
    test.equal(pointWithLine(new Point(1, 100), line), true);

    test.end();
});

tape("pointWithLine takes an epsilon test", (test: any) => {
    // See https://github.com/HarryStevens/geometric/issues/19
    const relationships = [{
        "point": new Point(-50.94850158691406,-3.027209166609623),
        "line": new Line(new Point(-49.69850158691406,-3.0271999835968018), new Point(-51.19850158687358,-3.027211003212187))
    },{
        "point": new Point(-46.8047,-12.1569),
        "line": new Line(new Point(-46.2164,-12.0707), new Point(-47.700552783102914,-12.288163827814842))
    },{
        "point": new Point(-45.41063565015793,-6.862901151180267),
        "line": new Line(new Point(-44.59149932861328,-7.436500072479248), new Point(-45.82020378894317,-6.576101705927197))
    },{
        "point": new Point(-46.22977195704452,-6.289302240145567),
        "line": new Line(new Point(-44.59149932861328,-7.436500072479248), new Point(-45.82020378894317,-6.576101705927197))
    },{
        "point": new Point(-33.12336051464081,-15.46659255027771),
        "line": new Line(new Point(-33.942501068115234,-14.892999649047852), new Point(-32.713790276416105,-15.753388973924736))
    },{
        "point": new Point(-32.30421998684139,-16.040185433528965),
        "line": new Line(new Point(-33.942501068115234,-14.892999649047852), new Point(-32.713790276416105,-15.753388973924736))
    },{
        "point": new Point(-33.94243496656418,-14.89300149679184),
        "line": new Line(new Point(-33.12329864501953,-15.46660041809082), new Point(-34.35200310534942,-14.60620205153877))
    },{
        "point": new Point(-34.76157127345077,-14.319402585757139),
        "line": new Line(new Point(-33.12329864501953,-15.46660041809082), new Point(-34.35200310534942,-14.60620205153877))
    },{
        "point": new Point(-33.94245994091034,-14.892992734909058),
        "line": new Line(new Point(-34.761600494384766,-14.3193998336792), new Point(-33.53288970268564,-15.179789158556083))
    },{
        "point": new Point(-33.12331941311092,-15.466585618160314),
        "line": new Line(new Point(-34.761600494384766,-14.3193998336792), new Point(-33.53288970268564,-15.179789158556083))
    },{
        "point": new Point(-34.76163738965988,-14.31940072774887),
        "line": new Line(new Point(-33.942501068115234,-14.892999649047852), new Point(-35.17120552844512,-14.0326012824958))
    }];

    relationships.forEach(relationship => {
        test.equal(pointWithLine(relationship.point, relationship.line), false);
        test.equal(pointWithLine(relationship.point, relationship.line, 1e-6), true);
    });

    test.end();
});
