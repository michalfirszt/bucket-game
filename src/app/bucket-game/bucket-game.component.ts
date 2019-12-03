import { Component, OnInit } from '@angular/core';
import { Bucket } from './Bucket';

@Component({
  selector: 'app-bucket-game',
  templateUrl: './bucket-game.component.html',
  styleUrls: ['./bucket-game.component.sass']
})
export class BucketGameComponent implements OnInit {

  buckets: Bucket[];

  selectedBucket: Bucket;

  transfer: number;

  constructor() { }

  ngOnInit() {
    this.buckets = [];
    this.buckets.push(new Bucket(6, 6));
    this.buckets.push(new Bucket(4, 0));
    this.buckets.push(new Bucket(2, 0));
    this.selectedBucket = null;
  }

  selectBucket(bucket) {
    this.selectedBucket = bucket;
  }

  transferBucket(bucket) {

    if (this.selectedBucket == null) {
      this.selectedBucket = bucket;
    } else {

      if ((bucket.value + this.selectedBucket.value) > bucket.value) {
        this.transfer = bucket.max - bucket.value;
      } else {
        this.transfer = this.selectedBucket.value;
      }

      if (this.transfer > this.selectedBucket.value) {
        this.transfer = this.selectedBucket.value;
      }

      this.selectedBucket.value -= this.transfer;
      bucket.value += this.transfer;

      this.selectedBucket = null;
    }
  }

}
