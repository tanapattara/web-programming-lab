@extends('layouts.app')

@section('content')
<div class="container">
<a class="btn btn-primary mb-3" href="/member_new" role="button">เพิ่มสมาชิกใหม่</a>
    <div class="row justify-content-center">
	   <!--ทำซ้ำ <div> เพื่อแสดงข้อมูลจากตัวแปร $members-->
        @foreach($members as $member)
        <div class="col-md-4">
        <a href="/members/{{$member->id}}">
            <div class="card" style="margin-bottom: 2em;">
                <div class="card-body">
                    <div class="" style="text-align: center!important;">
                    <!-- แสดงข้อมูลจาก $member -->
                    {{$member->first_name}}  {{$member->last_name}}
                    </div>
                </div>
            </div>
        </a>
        </div>
        @endforeach 
    </div>
</div>
@endsection