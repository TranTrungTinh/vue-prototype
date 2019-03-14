<template>
  <div class="report-sumary">
    <a-divider orientation="left">Text</a-divider>
    <a-row type="flex" justify="space-between">
        <a-col :span="7">
            <div class="report-sumary__item">
                <div class="sumary__item-content">
                    <div class="item-content-icon"><i class="fa fa-users" style="color: #f0932b"></i></div>
                    <div class="item-content-data">
                        <span>New workers</span>
                        <span>2,123</span>
                    </div>
                </div>
                <a-divider />
                <div class="sumary__item-footer">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Last day</span>
                </div>
            </div>
        </a-col>
        <a-col :span="7">
            <div class="report-sumary__item">
                <div class="sumary__item-content">
                    <div class="item-content-icon"><i class="fa fa-clipboard-list" style="color: #2ed573"></i></div>
                    <div class="item-content-data">
                        <span>All Tasks</span>
                        <span>4,332</span>
                    </div>
                </div>
                <a-divider />
                <div class="sumary__item-footer">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Last day</span>
                </div>
            </div>
        </a-col>
        <a-col :span="7">
            <div class="report-sumary__item">
                <div class="sumary__item-content">
                    <div class="item-content-icon"><i class="fa fa-cogs" style="color: #eb2f06"></i></div>
                    <div class="item-content-data">
                        <span>Tasks are processing</span>
                        <span>1,256</span>
                    </div>
                </div>
                <a-divider />
                <div class="sumary__item-footer">
                    <i class="fas fa-stopwatch"></i>
                    <span>In the last hour</span>
                </div>
            </div>
        </a-col>
    </a-row>
    <div style="height: 30px"></div>
    <a-divider orientation="left">Text</a-divider>
    <a-row type="flex" justify="space-between">
        <a-col :span="7">
            <div class="report-traffic__item">
                <div class="traffic--header">
                    <div class="traffic--header-content">
                        <span class="traffic-point" style="background: #009432"></span>
                        <span class="traffic-text">Total Registrations</span>
                    </div>
                    <div class="traffic--header-select">
                        <a-select defaultValue="day" style="width: 120px">
                            <a-select-option value="day">Per day</a-select-option>
                            <a-select-option value="week">Per Week</a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="traffic-data">850</div>
                <div class="traffic-footer">
                    <a-row>
                        <a-col :span="12">
                            <div class="traffic-footer--left">
                                <div class="traffic-footer--item">
                                    <span>+165</span>
                                    <span style="color: green"><a-icon type="rise" /></span>
                                </div>
                                <div class="traffic-footer--sub">Registrations</div>
                            </div>
                        </a-col>
                        <a-col :span="12">
                            <div class="traffic-footer--right">
                                <div class="traffic-footer--item">
                                    <span>4.5%</span>
                                    <span style="color: red"><a-icon type="fall" /></span>
                                </div>
                                <div class="traffic-footer--sub">Bounce Rate</div>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-col>
        <a-col :span="7">
            <div class="report-traffic__item">
                <div class="traffic--header">
                    <div class="traffic--header-content">
                        <span class="traffic-point" style="background: #0652DD"></span>
                        <span class="traffic-text">Total Signin</span>
                    </div>
                    <div class="traffic--header-select">
                        <a-select defaultValue="day" style="width: 120px">
                            <a-select-option value="day">Per day</a-select-option>
                            <a-select-option value="week">Per Week</a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="traffic-data">1,350</div>
                <div class="traffic-footer">
                    <a-row>
                        <a-col :span="12">
                            <div class="traffic-footer--left">
                                <div class="traffic-footer--item">
                                    <span>+472</span>
                                    <span style="color: green"><a-icon type="rise" /></span>
                                </div>
                                <div class="traffic-footer--sub">Signin</div>
                            </div>
                        </a-col>
                        <a-col :span="12">
                            <div class="traffic-footer--right">
                                <div class="traffic-footer--item">
                                    <span>7.5%</span>
                                    <span style="color: green"><a-icon type="rise" /></span>
                                </div>
                                <div class="traffic-footer--sub">Bounce Rate</div>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-col>
        <a-col :span="7">
            <div class="report-traffic__item">
                <div class="traffic--header">
                    <div class="traffic--header-content">
                        <span class="traffic-point" style="background: #EA2027"></span>
                        <span class="traffic-text">Total Signout</span>
                    </div>
                    <div class="traffic--header-select">
                        <a-select defaultValue="day" style="width: 120px">
                            <a-select-option value="day">Per day</a-select-option>
                            <a-select-option value="week">Per Week</a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="traffic-data">367</div>
                <div class="traffic-footer">
                    <a-row>
                        <a-col :span="12">
                            <div class="traffic-footer--left">
                                <div class="traffic-footer--item">
                                    <span>+234</span>
                                    <span style="color: green"><a-icon type="rise" /></span>
                                </div>
                                <div class="traffic-footer--sub">Signout</div>
                            </div>
                        </a-col>
                        <a-col :span="12">
                            <div class="traffic-footer--right">
                                <div class="traffic-footer--item">
                                    <span>3.5%</span>
                                    <span style="color: red"><a-icon type="fall" /></span>
                                </div>
                                <div class="traffic-footer--sub">Bounce Rate</div>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.report-sumary__item {
    border-radius: 6px;
    box-shadow: 0 6px 10px 2px rgba(0,0,0,.15);
    background-color: #fff;
    color: #252422;
    padding: 16px 24px;
    margin-bottom: 20px;
}
.sumary__item-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item-content-icon {
    font-size: 60px;
}
.item-content-data {
    text-align: right;
}
.item-content-data span:first-child{
    display: block;
    font-size: 16px;
}
.item-content-data span:last-child {
    font-size: 36px;
    font-weight: 600;
}
.sumary__item-footer {
    font-size: 14px;
    opacity: 0.5;
}
.sumary__item-footer span {
    padding-left: 10px;
}

.report-traffic__item {
    margin-bottom: 30px;
    /* padding: 15px 20px; */
    border-radius: .25rem;
    box-shadow: 0 6px 10px 2px rgba(0,0,0,.15);
    background-color: #fff;
    color: #252422;
}
.traffic--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 12px;
}
.traffic--header-content {
    font-size: 18px;
    padding: 12px 10px;
    display: flex;
    align-items: center;
}

.traffic-point {
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 10px;
}
.traffic-data {
    padding: 0px 20px;
    font-size: 40px;
    font-weight: 600;
}
.traffic-footer {
    border-top: solid 1px #d6dee5;
}

.traffic-footer--left {
    padding: 10px 14px;
    border-right: solid 0.5px #d6dee5;
    opacity: 0.6;
}
.traffic-footer--item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding-bottom: 10px 
}
.traffic-footer--right {
    padding: 10px 14px;
    border-left: solid 0.5px #d6dee5;
    opacity: 0.6;
}
</style>

